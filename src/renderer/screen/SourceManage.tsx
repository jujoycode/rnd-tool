import {
  ButtonGroup,
  Button,
  Container,
  RadioTileGroup,
  RadioTile,
  Divider,
  Heading,
  InputGroup,
  Input,
  Radio,
  Toggle,
  Text,
  RadioGroup,
  VStack,
  Panel,
  Accordion,
  Progress,
  Footer,
} from 'rsuite'
import {
  SquareFunction,
  PanelsTopLeft,
  WandSparkles,
  Server,
  Boxes,
  FolderSearch,
  SquareTerminal,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import { useState, useEffect } from 'react'

import '../css/SourceManage.css'

function SourceManage() {
  const [activePage, setActivePage] = useState(1)

  const [targetCategory, setTargetCategory] = useState('')
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)

  useEffect(() => {
    setPrevBtnDisabled(activePage === 1 ? true : false)

    if (activePage === 1) {
      setNextBtnDisabled(!targetCategory)
    }

    if (activePage === 2) {
      setNextBtnDisabled(true)
    }
  }, [activePage, targetCategory])

  return (
    <Container id="SourceManage">
      <Container id="SourceManage_top">
        <Heading style={{ marginLeft: '5vw' }} level={4}>
          Source Management
        </Heading>
      </Container>
      <Container id="SourceManage_main">
        {activePage === 1 ? (
          <PreSelectPage targetCategory={targetCategory} setTargetCategory={setTargetCategory} />
        ) : (
          <OptionSelectPage targetCategory={targetCategory} setTargetCategory={setTargetCategory} />
        )}
      </Container>
      <Container id="SourceManage_bottom">
        {/* <Container id="SourceManage_path">
          <Text>Path: </Text>
          <InlineEdit
            placeholder="Click to edit ..."
            showControls={false}
            defaultValue="/Users/juhyeong/Downloads/adminToolTest"
            disabled={activePage !== 1}
            value={targetPath}
            onChange={(v) => setTargetPath(v as string)}
          />
        </Container> */}

        <ButtonGroup id="SourceManage_pagination" size="sm">
          <Button
            disabled={prevBtnDisabled}
            onClick={() => setActivePage(activePage - 1)}
            startIcon={<ChevronLeft size={16} />}
          >
            Prev
          </Button>
          <Button
            disabled={nextBtnDisabled}
            onClick={() => {
              setActivePage(activePage + 1)
            }}
            endIcon={<ChevronRight size={16} />}
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
          icon={<PanelsTopLeft className="radioIcon" />}
          label="Application"
          value="application"
        >
          Download Application source to destination path
        </RadioTile>

        <RadioTile
          className="sourceRadio"
          icon={<WandSparkles className="radioIcon" />}
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
          icon={<SquareFunction className="radioIcon" />}
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
          icon={<Boxes className="radioIcon" />}
          label="Framework"
          value="framework"
        >
          Download Cals Framework source to destination path
        </RadioTile>
      </RadioTileGroup>
    </Container>
  )
}

function OptionSelectPage(props: {
  targetCategory: string
  setTargetCategory: (value: string) => void
}) {
  const [targetPath, setTargetPath] = useState('')
  const [operation, setOperation] = useState('')
  const [scope, setScope] = useState('')
  const [eventLogs, setEventLogs] = useState<string[]>([])

  const LogHeader = (
    <>
      <SquareTerminal size={16} />
      <Text size="md" style={{ marginLeft: '2%' }}>
        Event Log
      </Text>
    </>
  )

  const printEventLog = (event: string) => {
    const now = new Date()
    const date = now.toISOString().split('T')[0]
    const time = now.toTimeString().split(' ')[0]
    const timestamp = `[${date} ${time}]`
    setEventLogs((prev) => [...prev, `${timestamp} ${event}`])
  }

  useEffect(() => {
    setEventLogs([])
    printEventLog('Open Source Management')
  }, [])

  return (
    <Container id="SourceManage_optionSelect">
      <Container id="SourceManage_form">
        <Panel className="SourceManage_panel" bordered>
          <Container id="SourceManage_panel_form">
            <VStack className="stackBox">
              <Text>Path</Text>
              <InputGroup inside>
                <Input value={targetPath} onChange={setTargetPath} />
                <InputGroup.Button
                  onClick={() => {
                    printEventLog('Open Folder Dialog')
                  }}
                >
                  <FolderSearch size={16} />
                </InputGroup.Button>
              </InputGroup>
            </VStack>

            <VStack className="stackBox">
              <Text>Operation</Text>
              <RadioGroup inline value={operation} onChange={(v) => setOperation(v as string)}>
                <Radio color="green" value="Download">
                  Download
                </Radio>
                <Radio color="green" value="Update">
                  Update
                </Radio>
              </RadioGroup>
            </VStack>

            <VStack className="stackBox">
              <Text>Scope</Text>
              <RadioGroup inline value={scope} onChange={(v) => setScope(v as string)}>
                <Radio color="green" value="All">
                  All
                </Radio>
                <Radio color="green" value="Selected">
                  Selected
                </Radio>
              </RadioGroup>
            </VStack>

            {/* <VStack className="stackBox">
            <Panel bordered>
              <CheckboxGroup id="scopeList">
                <Checkbox value="CalsComWebCommonSelectData">CalsComWebCommonSelectData</Checkbox>
                <Checkbox value="CalsComWebCommonSaveData">CalsComWebCommonSaveData</Checkbox>
              </CheckboxGroup>
            </Panel>
          </VStack> */}

            {/* <VStack className="stackBox">
            <Text>Default Branch</Text>
            <Input placeholder="priod1" />
            <Input placeholder="priod2" />
            <Input placeholder="priod3" />
          </VStack> */}

            <VStack className="stackBox">
              <Text>Version</Text>
              <Toggle
                name="enable"
                color="green"
                defaultChecked
                unCheckedChildren="v1"
                checkedChildren="v2"
              />
            </VStack>

            <VStack className="stackBox">
              <Text>Package Install</Text>
              <Toggle
                name="enable"
                color="green"
                defaultChecked
                checkedChildren="Yes"
                unCheckedChildren="No"
              />
            </VStack>
          </Container>

          <Container id="SourceManage_panel_btn">
            <VStack className="stackBox">
              <Button
                block
                appearance="primary"
                color="green"
                onClick={() => {
                  printEventLog('Process Start')
                }}
              >
                Start
                {/* Processing... */}
              </Button>
              {/* <Progress.Line showInfo={false} /> */}
            </VStack>
          </Container>
        </Panel>
      </Container>
      <Container id="SourceManage_log">
        <Container id="SourceManage_accordion">
          <Accordion bordered>
            <Accordion.Panel defaultExpanded header={LogHeader}>
              <VStack spacing={8}>
                {eventLogs.map((log, index) => (
                  <Text key={index} size="sm">
                    {log}
                  </Text>
                ))}
              </VStack>
            </Accordion.Panel>
          </Accordion>
        </Container>
      </Container>
    </Container>
  )
}

export default SourceManage
