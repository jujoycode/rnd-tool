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

import { T_STUDIO_APPLICATION } from '../../data/aplacc' //TEST: 추후 DB 연결 후 삭제
import type { ApplicationData } from '../../interface/aplacc.interface'

import '../css/StudioDeploy.css'

function StudioDeploy() {
  const [step, setStep] = useState(0)
  const [applicationData, setApplicationData] = useState(
    T_STUDIO_APPLICATION.map((item) => ({ ...item, isCheck: false }))
  )
  const [fileData, setFileData] = useState([])
  const [btnLoad, setBtnLoad] = useState(false)

  useEffect(() => {
    console.log(fileData)
  }, [fileData])

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

  function handleClickStart() {
    setStep(1)
    setFileData([])
  }

  return (
    <Container id="DeployContainer">
      {/* <Loader backdrop content="loading..." vertical /> */}

      <Heading id="header" level={4}>
        CALS Studio Deploy
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
          <Uploader action="" draggable fileList={fileData}>
            <div id="uploader">
              <Text muted>please upload the</Text>
              <Tag style={{ marginLeft: 5, marginRight: 5 }}>.output</Tag>
              <Text muted>folder</Text>
            </div>
          </Uploader>
          <ButtonGroup id="btnContainer-studioDeploy">
            <Button
              color={'green'}
              appearance={'primary'}
              disabled={!applicationData.some((data) => data.isCheck === true)}
              loading={btnLoad}
              onClick={() => {
                setBtnLoad(true)
                handleClickStart()
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

export default StudioDeploy
