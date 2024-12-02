import { useEffect, useState } from 'react'
import { Button, Group, Container, SimpleGrid, Text, Stack, ScrollArea, Card } from '@mantine/core'
import Icon from '@atom/Icon'
import JsonInput from '@atom/JsonInput'
import SegmentButton from '@atom/segmentButton'
import Popup from '@molecule/Popup'
import DropZone from '@organism/DropZone'
import { VersionSegmentButtonProps, MapFileDropZoneProps } from '@constant/ConstandProp'
import type { FileWithPath } from '@mantine/dropzone'

export default function DeployVersionMapPage() {
  const [openAplListPopup, setOpenAplListPopup] = useState(false)

  const [activeTab, setActiveTab] = useState<'file' | 'json'>('file')
  const [files, setFiles] = useState<FileWithPath[]>([])
  const [json, setJson] = useState<string>('{}')
  // const [targetMap, setTargetMap] = useState<string>()
  const [targetApplication, setTargetApplication] = useState<string[]>([])

  const [buttonCondition, setButtonCondition] = useState<boolean>(true)

  //TODO: DB 붙인 후 qt_application으로 변경해야함
  const AllApplication = ['DEMO', 'RndQA', 'OpenGA', 'GMS', 'PMS', 'SFA', 'Aerosuite']

  useEffect(() => {
    console.log(targetApplication)
  }, [targetApplication])

  // init value on change tab
  useEffect(() => {
    if (activeTab === 'json') {
      setJson('{}')
    } else {
      setFiles([])
    }
  }, [activeTab])

  // change button disabled with file / json
  useEffect(() => {
    setButtonCondition(files.length === 0)
  }, [files])

  useEffect(() => {
    try {
      JSON.parse(json)
      setButtonCondition(json.length <= 2)
    } catch (error) {
      setButtonCondition(true)
    }
  }, [json])

  const handleDeploy = () => {
    console.log('ipc call')
    window.electron.ipcRenderer.send('uploadToS3', {
      targetBucket: 'dev.repo.calsplatz.com',
      targetPath: 'testPath.png'
    })
  }

  return (
    <>
      <ScrollArea.Autosize>
        <Group justify="flex-end" mt="sm" mb={5}>
          <SegmentButton
            {...VersionSegmentButtonProps}
            value={activeTab}
            onChange={(value) => setActiveTab(value as 'file' | 'json')}
          />
        </Group>

        <Container p={0} h={'220'}>
          {activeTab === 'file' ? (
            <DropZone {...MapFileDropZoneProps} files={files} setFiles={setFiles} />
          ) : (
            <JsonInput value={json} onChange={setJson} />
          )}
        </Container>

        <Stack mt={80}>
          <Text size="md" fw={500} c="dimmed">
            Map Category
          </Text>
          <SimpleGrid cols={3}>
            <Card withBorder radius="md">
              <Text c="dimmed" size="sm" fw={500}>
                LambdaMap
              </Text>
            </Card>
            <Card withBorder radius="md">
              <Text c="dimmed" size="sm" fw={500}>
                TopicMap
              </Text>
            </Card>
            <Card withBorder radius="md">
              <Text c="dimmed" size="sm" fw={500}>
                EcsMap
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>

        <Stack mt="xl">
          <Text size="md" fw={500} c="dimmed">
            Target Application
          </Text>
          <Button variant="light" rightSection={<Icon name="ChevronRight" />} onClick={() => setOpenAplListPopup(true)}>
            Pick
          </Button>
        </Stack>

        <Group mt={80} justify="flex-end">
          <Button disabled={buttonCondition} w="20%" radius="md" onClick={() => handleDeploy()}>
            Start
          </Button>
        </Group>
      </ScrollArea.Autosize>

      <Popup.Side
        title="Application List"
        size="xs"
        searchable
        selectable
        data={AllApplication}
        selectedData={targetApplication}
        onSelectionChange={setTargetApplication}
        opened={openAplListPopup}
        onClose={() => setOpenAplListPopup(false)}
      />
    </>
  )
}
