import {
  ButtonGroup,
  Button,
  Container,
  RadioTileGroup,
  RadioTile,
  Divider,
  Heading,
  Form,
  InputGroup,
  Input,
  Radio,
  Toggle,
} from 'rsuite'
import { PagePrevious, PageNext, Icon } from '@rsuite/icons'
import {
  SquareFunction,
  PanelsTopLeft,
  WandSparkles,
  Server,
  Boxes,
  FolderSearch,
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
            startIcon={<PagePrevious />}
          >
            Prev
          </Button>
          <Button
            disabled={nextBtnDisabled}
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
  return (
    <Container id="SourceManage_optionSelect">
      <Container id="SourceManage_form">
        <Form>
          <Form.Group controlId="path">
            <Form.ControlLabel>Path</Form.ControlLabel>
            <InputGroup inside>
              <Input color="green" />
              <InputGroup.Button>
                <FolderSearch size={16} />
              </InputGroup.Button>
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Operation</Form.ControlLabel>
            <Radio color="green">Download</Radio>
            <Radio color="green">Update</Radio>
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Scope</Form.ControlLabel>
            <Radio color="green">All</Radio>
            <Radio color="green">Selected</Radio>
          </Form.Group>

          <Form.Group controlId="version">
            <Form.ControlLabel>Version</Form.ControlLabel>
            <Form.Control
              name="enable"
              color="green"
              accepter={Toggle}
              unCheckedChildren="v1"
              checkedChildren="v2"
            />
          </Form.Group>
        </Form>
      </Container>
      <Container id="SourceManage_log"></Container>
    </Container>
  )
}

export default SourceManage
