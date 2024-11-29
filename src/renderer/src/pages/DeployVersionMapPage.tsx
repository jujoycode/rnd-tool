import { useEffect, useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Button, Group, Container, Select } from '@mantine/core'
import JsonInput from '@atom/JsonInput'
import SegmentButton from '@atom/segmentButton'
import Popup from '@molecule/Popup'
import DropZone from '@organism/DropZone'
import { VersionSegmentButtonProps, MapFileDropZoneProps } from '@constant/ConstandProp'
import type { FileWithPath } from '@mantine/dropzone'
import CheckList from '@renderer/components/molecule/CheckList'

export default function DeployVersionMapPage() {
  const [popupOpened, { open, close }] = useDisclosure(false)
  const [activeTab, setActiveTab] = useState<'file' | 'json'>('file')
  const [files, setFiles] = useState<FileWithPath[]>([])
  const [json, setJson] = useState<string>('{}')
  const [buttonCondition, setButtonCondition] = useState<boolean>(true)
  const [selectedMap, setSelectedMap] = useState<string>('')

  const maps = [
    { value: 'lambda', label: 'Lambda Map' },
    { value: 'ecs', label: 'ECS Map' },
    { value: 'topic', label: 'Topic Map' }
  ]

  useEffect(() => {
    if (activeTab === 'json') {
      setJson('{}')
    } else {
      setFiles([])
    }
  }, [activeTab])

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

  return (
    <>
      <Select
        label="Target Map"
        placeholder="Choose a map"
        mb="md"
        data={maps}
        value={selectedMap}
        onChange={(value) => setSelectedMap(value || '')}
      />

      <CheckList
        label="Applications"
        description="Select applications"
        items={['App 1', 'App 2', 'App 3']}
        size={{ width: '100%', height: 150 }}
      />

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
        <Button disabled={buttonCondition} w={'20%'} onClick={open}>
          Start
        </Button>
      </Group>

      <Popup title="Popup" content={<></>} opened={popupOpened} onClose={close} />
    </>
  )
}
