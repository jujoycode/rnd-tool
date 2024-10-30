import { HeadingGroup, Heading, Input, ButtonGroup, Button, Tag } from 'rsuite'
import { createCipheriv, createDecipheriv } from 'browser-crypto'

import '../css/AesCryptor.css'
import { useState } from 'react'

function AesCryptor() {
  const [authorization, setAuthorization] = useState('')
  const [uuid, setUuid] = useState('')
  const [data, setData] = useState('')
  const [cryptedData, setCryptedData] = useState('')

  function encryptCBC(secretKey: string, iv: string, data: string) {
    iv = iv.slice(-16)

    const ciper = createCipheriv('aes-256-cbc', secretKey, iv)
    const enctypedData = ciper.update(data, 'utf-8', 'base64').concat(ciper.final('base64'))

    setCryptedData(enctypedData)
  }

  function decryptCBC(secretKey: string, iv: string, data: string) {
    iv = iv.slice(-16)

    const ciper = createDecipheriv('aes-256-cbc', secretKey, iv)
    const decryptedData = ciper.update(data, 'base64', 'utf-8').concat(ciper.final('utf-8'))

    setCryptedData(decryptedData)
  }

  return (
    <div id="cryptorContainer">
      <div id="enctyprContainer">
        <HeadingGroup id="headerGruop">
          <Heading className="title">CALS Payload Cryptor</Heading>
          <Tag size="sm">aes-256-cbc</Tag>
        </HeadingGroup>
        <Input
          placeholder="Authorization"
          value={authorization}
          onChange={setAuthorization}
          minLength={16}
        />
        <Input placeholder="UUID" value={uuid} onChange={setUuid} min={32} />
        <Input placeholder="Data" value={data} onChange={setData} />
        <ButtonGroup id="btnContainer">
          <Button
            color={'yellow'}
            appearance={'ghost'}
            onClick={() => encryptCBC(uuid, authorization, data)}
          >
            Encrypt
          </Button>
          <Button
            color={'green'}
            appearance={'ghost'}
            onClick={() => decryptCBC(uuid, authorization, data)}
          >
            Decrypt
          </Button>
        </ButtonGroup>
        <Input as={'textarea'} disabled value={cryptedData} />
      </div>
    </div>
  )
}

export default AesCryptor
