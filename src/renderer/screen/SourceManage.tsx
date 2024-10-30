import {
  ButtonGroup,
  Button,
  Container,
  InlineEdit,
  Text,
  RadioTileGroup,
  RadioTile,
  Divider,
  Heading,
} from 'rsuite'
import { PagePrevious, PageNext, Icon } from '@rsuite/icons'
import { SiAwslambda, SiAmazonecs } from 'react-icons/si'
import { BsWindowSidebar, BsDisplay } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'

import { useEffect, useState } from 'react'

import '../css/SourceManage.css'

function SourceManage() {
  const [activePage, setActivePage] = useState(1)
  const [mainComponent, setMainComponent] = useState(<></>)
  const [targetCategory, setTargetCategory] = useState('')

  const [nextBtnEnable, setNextBtnEnable] = useState(true)
  const [prevBtnEnable, setPrevBtnEnable] = useState(true)

  useEffect(() => {
    selectMainComponent()
  }, [activePage])

  useEffect(() => {
    setNextBtnEnable(targetCategory ? false : true)
  }, [targetCategory])

  const selectMainComponent = () => {
    let component = <></>

    switch (activePage) {
      case 1: {
        component = (
          <PreSelectPage targetCategory={targetCategory} setTargetCategory={setTargetCategory} />
        )
        break
      }

      case 2: {
        component = <OptionSelectPage />
        break
      }

      case 3: {
        component = <DownloadPage />
        break
      }
    }

    return setMainComponent(component)
  }

  return (
    <Container id="SourceManage">
      <Container id="SourceManage_top">
        <Text style={{ marginLeft: '5vw' }}>Path: </Text>
        <InlineEdit placeholder="Click to edit ..." defaultValue="C:\Users\sia\Documents\Source" />
      </Container>
      <Container id="SourceManage_optionSelect">{mainComponent}</Container>
      <Container id="SourceManage_bottom">
        <ButtonGroup id="SourceManage_pagination" size="sm">
          <Button
            disabled={prevBtnEnable}
            onClick={() => setActivePage(activePage - 1)}
            startIcon={<PagePrevious />}
          >
            Prev
          </Button>
          <Button
            disabled={nextBtnEnable}
            onClick={() => setActivePage(activePage + 1)}
            endIcon={<PageNext />}
          >
            Next
          </Button>
        </ButtonGroup>
      </Container>
    </Container>
  )
}

function PreSelectPage(props: {
  targetCategory: string
  setTargetCategory: (value: string) => void
}) {
  return (
    <Container>
      <RadioTileGroup
        style={{ width: '60vw' }}
        defaultValue={props.targetCategory}
        onChange={(v) => props.setTargetCategory(v as string)}
      >
        <Heading style={{ textAlign: 'left' }} level={4}>
          Client
        </Heading>

        <RadioTile
          className="sourceRadio"
          icon={<Icon as={BsWindowSidebar} />}
          label="Application"
          value="application"
        >
          Download Application source to destination path
        </RadioTile>

        <RadioTile
          className="sourceRadio"
          icon={<Icon as={BsDisplay} />}
          label="Studio"
          value="studio"
        >
          Download Studio source to destination path
        </RadioTile>

        <Divider />
        <Heading style={{ textAlign: 'left' }} level={4}>
          Server
        </Heading>

        <RadioTile
          className="sourceRadio"
          icon={<Icon as={SiAwslambda} />}
          label="Lambda"
          value="lambda"
        >
          Download Lambda source to destination path
        </RadioTile>

        <RadioTile className="sourceRadio" icon={<Icon as={SiAmazonecs} />} label="ECS" value="ecs">
          Download ECS source to destination path
        </RadioTile>

        <RadioTile
          className="sourceRadio"
          icon={<Icon as={VscFolderLibrary} />}
          label="Framework"
          value="framework"
        >
          Download Cals Framework source to destination path
        </RadioTile>
      </RadioTileGroup>
    </Container>
  )
}

function OptionSelectPage() {
  return <Container></Container>
}

function DownloadPage() {
  return <Container></Container>
}

export default SourceManage
