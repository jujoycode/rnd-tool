import { DataSource } from 'typeorm'
import { qt_user } from './entity/qt_user'

const ConsolDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'calsadmin',
  password: 'calsadmin1!',
  database: 'console',
  entities: [qt_user],
  logging: true,
  synchronize: true
})

export { ConsolDataSource }
