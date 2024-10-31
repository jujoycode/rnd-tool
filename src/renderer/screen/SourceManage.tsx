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
import { PagePrevious, PageNext } from '@rsuite/icons'
import { Cpu, Monitor, BoxSelect, Server, Library } from 'lucide-react'

import { useState, useEffect } from 'react'

import '../css/SourceManage.css'

function SourceManage() {
  const [activePage, setActivePage] = useState(1)
  const [mainComponent, setMainComponent] = useState(<></>)

  const [targetPath, setTargetPath] = useState('')
  const [targetCategory, setTargetCategory] = useState('')
  const [nextBtnEnable, setNextBtnEnable] = useState(true)
  const [prevBtnEnable, setPrevBtnEnable] = useState(false)

  useEffect(() => {
    selectMainComponent()
  }, [activePage])

  useEffect(() => {
    setNextBtnEnable(targetCategory ? false : true)
  }, [targetCategory])

  /**
   * selectMainComponent
   * @desc 메인 컴포넌트 선택 함수, activePage가 변경될 경우 동작
   */
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
        <Heading style={{ marginLeft: '5vw' }} level={4}>
          Source Management
        </Heading>
      </Container>
      <Container id="SourceManage_main">{mainComponent}</Container>
      <Container id="SourceManage_bottom">
        <Container id="SourceManage_path">
          <Text>Path: </Text>
          <InlineEdit
            placeholder="Click to edit ..."
            showControls={false}
            defaultValue="/Users/juhyeong/Downloads/adminToolTest"
            // disabled={true}
            value={targetPath}
            onChange={(v) => setTargetPath(v as string)}
          />
        </Container>

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
            onClick={() => {
              setActivePage(activePage + 1)
            }}
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
    <Container id="SourceManage_preSelect">
      <RadioTileGroup
        style={{ width: '50vw' }}
        defaultValue={props.targetCategory}
        onChange={(v) => props.setTargetCategory(v as string)}
      >
        <Heading id="SourceManage_header" level={5}>
          Client
        </Heading>

        <RadioTile
          className="sourceRadio"
          icon={<Monitor className="radioIcon" />}
          label="Application"
          value="application"
        >
          Download Application source to destination path
        </RadioTile>

        <RadioTile
          className="sourceRadio"
          icon={<BoxSelect className="radioIcon" />}
          label="Studio"
          value="studio"
        >
          Download Studio source to destination path
        </RadioTile>

        <Divider />

        <Heading id="SourceManage_header" level={5}>
          Server
        </Heading>

        <RadioTile
          className="sourceRadio"
          icon={<Cpu className="radioIcon" />}
          label="Lambda"
          value="lambda"
        >
          Download Lambda source to destination path
        </RadioTile>

        <RadioTile
          className="sourceRadio"
          icon={<Server className="radioIcon" />}
          label="ECS"
          value="ecs"
        >
          Download ECS source to destination path
        </RadioTile>

        <RadioTile
          className="sourceRadio"
          icon={<Library className="radioIcon" />}
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
