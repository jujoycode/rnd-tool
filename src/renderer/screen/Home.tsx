import { useEffect, useState } from 'react'
import { Container, Nav, Sidenav, Avatar, Divider, Text, Heading } from 'rsuite'
import { Peoples, SingleSource, Tools, Calendar as CalendarIcon, Gear, Import } from '@rsuite/icons'

import AesCryptor from './AesCryptor'
import Calendar from './Calendar'
import AplDeploy from './AplDeploy'
import StudioDeploy from './StudioDeploy'
import UserInfo from './UserInfo'
import SourceManage from './SourceManage'

import { userData } from '../../data/auth'

import '../css/Home.css'

function Home() {
  const [active, setActice] = useState('0')
  const [openUserInfo, setOpenUserInfo] = useState(false)
  const [mainComponent, setMainCompnent] = useState(<div>Select a menu option</div>)

  useEffect(() => {
    renderContent()
  }, [active])

  function callUserInfo(isClose?: boolean) {
    setOpenUserInfo(isClose ?? true)
  }

  function onClickHome() {
    setActice('0')
  }

  const renderContent = () => {
    if (active === undefined) {
      return
    }

    let Component = <></>
    switch (active) {
      case '1-1': {
        Component = <AplDeploy />
        break
      }
      case '1-2': {
        Component = <StudioDeploy />
        break
      }
      case '3': {
        Component = <Calendar />
        break
      }
      case '4-1': {
        Component = <AesCryptor />
        break
      }
      case '4-4': {
        Component = <SourceManage />
        break
      }
      default: {
        Component = (
          <div>
            <div className="animated jello">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9985 2C21.108 2 22.1315 2.58598 22.6941 3.54699L39.5703 32.299C40.1406 33.2679 40.1406 34.4633 39.5859 35.4321C39.0312 36.4009 37.992 37.0025 36.8748 37.0025H3.12234C2.00507 37.0025 0.965936 36.4009 0.411208 35.4321C-0.143519 34.4633 -0.135706 33.26 0.426834 32.299L17.303 3.54699C17.8656 2.58598 18.8891 2 19.9985 2ZM19.9985 12.0007C18.9594 12.0007 18.1234 12.8367 18.1234 13.8759V22.6265C18.1234 23.6656 18.9594 24.5016 19.9985 24.5016C21.0377 24.5016 21.8737 23.6656 21.8737 22.6265V13.8759C21.8737 12.8367 21.0377 12.0007 19.9985 12.0007ZM22.4987 29.502C22.4987 28.8389 22.2353 28.203 21.7664 27.7341C21.2976 27.2652 20.6616 27.0018 19.9985 27.0018C19.3355 27.0018 18.6995 27.2652 18.2307 27.7341C17.7618 28.203 17.4984 28.8389 17.4984 29.502C17.4984 30.1651 17.7618 30.801 18.2307 31.2699C18.6995 31.7387 19.3355 32.0021 19.9985 32.0021C20.6616 32.0021 21.2976 31.7387 21.7664 31.2699C22.2353 30.801 22.4987 30.1651 22.4987 29.502Z"
                  fill="#F56C6C"
                />
              </svg>
            </div>
            <p>구현되지 않은 화면입니다.</p>
          </div>
        )
        break
      }
    }

    setMainCompnent(Component)
  }

  return (
    <div id="Home">
      <UserInfo open={openUserInfo} handleClose={() => callUserInfo(false)} userInfo={userData} />

      <Container id="sideNavContainer">
        <Sidenav id="sideNav">
          <div id="title">
            <Heading level={5} onClick={onClickHome}>
              CALS R&D Tool
            </Heading>
          </div>
          <Divider style={{ margin: 0 }} />
          <Container id="mainNav">
            <Sidenav.Body>
              <Nav activeKey={active} onSelect={setActice} id="hoverNav">
                <Nav.Menu title="Deploy" icon={<Import />}>
                  <Nav.Item eventKey="1-1">Application</Nav.Item>
                  <Nav.Item eventKey="1-2">Studio</Nav.Item>
                  <Nav.Item eventKey="1-3">Lambda Map</Nav.Item>
                </Nav.Menu>
                <Nav.Menu title="Resource" icon={<SingleSource />}>
                  <Nav.Item eventKey="2-1">Lambda</Nav.Item>
                  <Nav.Item eventKey="2-2">ECS</Nav.Item>
                  <Nav.Item eventKey="2-3">Step Functions</Nav.Item>
                  <Nav.Item eventKey="2-4">S3</Nav.Item>
                  <Nav.Item eventKey="2-5">Dynamo DB</Nav.Item>
                </Nav.Menu>
                <Nav.Item eventKey="3" icon={<CalendarIcon />}>
                  Calendar
                </Nav.Item>
                <Nav.Menu title="Utility" icon={<Tools />}>
                  <Nav.Item eventKey="4-1">AES Cryptor</Nav.Item>
                  <Nav.Item eventKey="4-2">Meta Parsing</Nav.Item>
                  <Nav.Item eventKey="4-3">TS Test</Nav.Item>
                  <Nav.Item eventKey="4-4">Source Manage</Nav.Item>
                </Nav.Menu>
                <Nav.Item eventKey="5" icon={<Peoples />}>
                  User Pool
                </Nav.Item>
                <Nav.Menu title="Settings" icon={<Gear />}>
                  <Nav.Item eventKey="6-1">AWS Credential</Nav.Item>
                  <Nav.Item eventKey="6-2">Git Credential</Nav.Item>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
          </Container>
          <Divider style={{ margin: 0 }} />
          <Container id="userNav" onClick={() => callUserInfo()}>
            <Avatar circle id="userInfo" style={{ marginRight: '5%' }} />
            <Text size="lg" weight="medium" style={{ marginLeft: '5%' }}>
              {userData.id}
            </Text>
          </Container>
        </Sidenav>
      </Container>

      <Container id="HomeContent">{mainComponent}</Container>
    </div>
  )
}

export default Home
