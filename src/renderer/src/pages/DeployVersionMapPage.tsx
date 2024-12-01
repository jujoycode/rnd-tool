import { useEffect, useState } from 'react'
import { Button, Group, Container } from '@mantine/core'
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

  const [buttonCondition, setButtonCondition] = useState<boolean>(true)

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

    try {
      JSON.parse(json)
      setButtonCondition(json.length <= 2)
    } catch (error) {
      setButtonCondition(true)
    }
  }, [files, json])

  return (
    <>
      <Group justify="flex-end" mb={5}>
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
      <Group mt="sm" justify="flex-end">
        <Button disabled={buttonCondition} w="20%" radius="md">
          Start
        </Button>
      </Group>

      <Popup.Side
        title="Application List"
        size="xs"
        searchable
        selectable
        data={['DEMO', 'GMS', 'OpenGA']}
        selectedData={[]}
        onSelectionChange={() => {}}
        opened={openAplListPopup}
        onClose={() => setOpenAplListPopup(false)}
      />
    </>
  )
}
