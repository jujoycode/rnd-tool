import { useState } from 'react'

import background from '../../assets/green_tinted_image_further_reduced.png'

import { InputGroup, Input, Button, Container, useToaster, Message, Heading } from 'rsuite'
import { UserBadge, CharacterLock } from '@rsuite/icons'

import './Login.css'

import DB from '../../db/testDB'
import { userData } from '../../data/auth'

function Login(props: { isLogin: boolean; setIsLogin: (value: boolean) => void }) {
  const toaster = useToaster()

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [btnLoad, setBtnLoad] = useState(false)

  function push(callMsg: string, type: 'success' | 'error') {
    const msg = (
      <Message showIcon type={type} closable>
        <strong>{callMsg}</strong>
      </Message>
    )

    toaster.push(msg, { placement: 'topCenter', duration: 2000 })
  }

  function onClickLogin() {
    const memberInfo = structuredClone(DB.T_MEMBER) as any
    let bLoginFlag = false

    Object.keys(DB.T_MEMBER).forEach((memberId) => {
      if (memberId === id && memberInfo[memberId]['pw'] === pw) {
        bLoginFlag = true

        userData.name = memberInfo[memberId]['name']
        userData.id = id
        userData.email = memberInfo[memberId]['email']
      }
    })

    if (!bLoginFlag) {
      push('login failed, please check your id and pw', 'error')
      return
    }

    setBtnLoad(true)

    push(`환영합니다, ${memberInfo[id]['name']}님`, 'success')

    props.setIsLogin(true)
  }

  return (
    <div id="loginPage">
      <Container id="imageContainer">
        <img id="image" src={background} />
      </Container>
      <Container id="loginContainer">
        <Heading level={2}>CALS Admin Tool</Heading>
        <div id="loginForm">
          <InputGroup inside>
            <InputGroup.Addon>
              <UserBadge />
            </InputGroup.Addon>
            <Input placeholder="username" value={id} onChange={(value) => setId(value)} />
          </InputGroup>
          <InputGroup inside>
            <InputGroup.Addon>
              <CharacterLock />
            </InputGroup.Addon>
            <Input
              placeholder="password"
              type="password"
              value={pw}
              onChange={(value) => setPw(value)}
            />
          </InputGroup>
        </div>
        <Button
          id="loginBtn"
          appearance={btnLoad ? 'default' : 'primary'}
          color="green"
          onClick={onClickLogin}
          loading={btnLoad}
        >
          Login
        </Button>
      </Container>
    </div>
  )
}

export default Login
