import {
  Container,
  Heading,
  Steps,
  ButtonGroup,
  Button,
  Table,
  Checkbox,
  Uploader,
  Text,
  Tag,
} from 'rsuite'

import { useEffect, useState } from 'react'

import { T_APPLICATION } from '../../data/aplacc'

import type { ApplicationData, FileType } from '../../interface/aplacc.interface'

import '../css/AplDeploy.css'

function AplDeploy() {
  const [step, setStep] = useState(0)
  const [applicationData, setApplicationData] = useState(
    T_APPLICATION.map((item) => ({ ...item, isCheck: false }))
  )
  const [fileData, setFileData] = useState<FileType[]>([])
  const [btnLoad, setBtnLoad] = useState(false)
  const [uploadUrl, setUploadUrl] = useState('')

  useEffect(() => {}, [fileData])

  const { Column, HeaderCell, Cell } = Table

  function handleClickRow(rowData: ApplicationData) {
    const newData = applicationData.map((item) =>
      item.id === rowData.id ? { ...item, isCheck: !item.isCheck } : item
    )

    setApplicationData(newData)
  }

  function handleCheckChange(value: boolean, rowIndex: number) {
    const newData = [...applicationData]
    newData[rowIndex].isCheck = value

    setApplicationData(newData)
  }

  async function getPreSignedUrl(): Promise<string> {
    return 'a'
  }

  return (
    <Container id="DeployContainer">
      {/* <Loader backdrop content="loading..." vertical /> */}

      <Heading id="header" level={3}>
        CALS Application Deploy
      </Heading>

      <Container id="body">
        <Steps id="StepsContainer" vertical color={'green'} current={step}>
          <Steps.Item title="Prepare" />
          <Steps.Item title="Backup" />
          <Steps.Item title="Deploy" />
          <Steps.Item title="Invalidations" />
          <Steps.Item title="Finish" />
        </Steps>

        <Container id="ProcessContainer">
          <Table
            data={applicationData}
            height={230}
            onRowClick={(rowData) => handleClickRow(rowData)}
          >
            <Column align="center" fixed width={30}>
              <HeaderCell>#</HeaderCell>
              <Cell dataKey="isCheck" style={{ alignContent: 'center' }}>
                {(rowData, rowIndex) => (
                  <Checkbox
                    color={'green'}
                    checked={rowData.isCheck}
                    onChange={(_, checked) => handleCheckChange(checked, rowIndex!)}
                  />
                )}
              </Cell>
            </Column>
            <Column width={150} fixed>
              <HeaderCell>Name</HeaderCell>
              <Cell dataKey="name" />
            </Column>
            <Column width={300}>
              <HeaderCell>Id</HeaderCell>
              <Cell dataKey="id" />
            </Column>
          </Table>
          <Uploader
            autoUpload={false}
            action={uploadUrl}
            method="POST"
            draggable
            fileList={fileData}
            onChange={setFileData}
          >
            <div id="uploader">
              <Text muted>please upload the</Text>
              <Tag style={{ marginLeft: 5, marginRight: 5 }}>.output</Tag>
              <Text muted>folder</Text>
            </div>
          </Uploader>
          <ButtonGroup id="btnContainer-aplDeploy">
            <Button
              color={'green'}
              appearance={'primary'}
              disabled={!applicationData.some((data) => data.isCheck === true)}
              loading={btnLoad}
              onClick={() => {
                setBtnLoad(true)
              }}
            >
              Start
            </Button>
          </ButtonGroup>
        </Container>
      </Container>
    </Container>
  )
}

export default AplDeploy
