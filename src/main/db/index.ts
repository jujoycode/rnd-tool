import { readFileSync } from 'fs'
import { getEnv } from '../utility'
import { createTunnel, type TunnelOptions, type SshOptions, type ForwardOptions } from 'tunnel-ssh'
import { DataSource } from 'typeorm'
import { QtUser } from './entity/QtUser'

async function createSSHTunnel() {
  const tunnelOptions: TunnelOptions = {
    autoClose: true
  }

  const sshOptions: SshOptions = {
    host: '13.209.194.210',
    port: 22,
    username: 'ec2-user',
    privateKey: readFileSync(getEnv({ calsEnv: 'dev', key: 'CONSOLE_PEM_LOCATION' }))
  }

  const forwardOptions: ForwardOptions = {
    srcAddr: 'localhost',
    srcPort: 3307,
    dstAddr: getEnv({ calsEnv: 'dev', key: 'CONSOLE_DB_HOST' }),
    dstPort: 3306
  }
  await new Promise((resolve) => setTimeout(resolve, 2000)) // 터널 설정을 위한 대기 추가

  let [server] = await createTunnel(tunnelOptions, { port: 3307 }, sshOptions, forwardOptions)

  console.log('SSH Tunnel created')
  console.log(`Server listening on ${JSON.stringify(server.address())}`)
}

const ConsolDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: getEnv({ calsEnv: 'dev', key: 'CONSOLE_DB_USERNAME' }),
  password: getEnv({ calsEnv: 'dev', key: 'CONSOLE_DB_PASSWORD' }),
  database: getEnv({ calsEnv: 'dev', key: 'CONSOLE_DB_SCHEMA' }),
  entities: [QtUser],
  logging: true,
  synchronize: false
})

export { ConsolDataSource, createSSHTunnel }
