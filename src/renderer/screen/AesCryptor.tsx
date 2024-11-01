import { HeadingGroup, Heading, Input, ButtonGroup, Button, Tag, useToaster, Message } from 'rsuite'
import { createCipheriv, createDecipheriv } from 'browser-crypto'
import { LockKeyhole, LockKeyholeOpen } from 'lucide-react'

import '../css/AesCryptor.css'
import { useState } from 'react'

function AesCryptor() {
  const toaster = useToaster()

  const [authorization, setAuthorization] = useState('')
  const [uuid, setUuid] = useState('')
  const [data, setData] = useState('')
  const [cryptedData, setCryptedData] = useState('')

  function push(callMsg: string, type: 'success' | 'error') {
    const msg = (
      <Message showIcon type={type} closable>
        <strong>{callMsg}</strong>
      </Message>
    )

    toaster.push(msg, { placement: 'bottomEnd', duration: 3000 })
  }

  function cryptoCBC(secretKey: string, iv: string, data: string, decryptFlag: boolean = false) {
    if (secretKey.length !== 32) {
      push('UUID must be 32 characters', 'error')
      return
    }

    if (iv.length < 16) {
      push('Authorization must be at least 16 characters', 'error')
      return
    }

    iv = iv.slice(-16)

    try {
      const ciper = decryptFlag
        ? createDecipheriv('aes-256-cbc', secretKey, iv)
        : createCipheriv('aes-256-cbc', secretKey, iv)

      const cryptedData = decryptFlag
        ? ciper.update(data, 'base64', 'utf-8').concat(ciper.final('utf-8'))
        : ciper.update(data, 'utf-8', 'base64').concat(ciper.final('base64'))

      setCryptedData(cryptedData)
    } catch (error: any) {
      push(error, 'error')
    }
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
            startIcon={<LockKeyhole size={16} />}
            onClick={() => cryptoCBC(uuid, authorization, data)}
          >
            Encrypt
          </Button>
          <Button
            color={'green'}
            appearance={'ghost'}
            startIcon={<LockKeyholeOpen size={16} />}
            onClick={() => cryptoCBC(uuid, authorization, data, true)}
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
