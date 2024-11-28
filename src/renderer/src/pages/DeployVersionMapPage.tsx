import { useEffect, useState } from 'react'
import { Button, Group, Select, Stack, Container } from '@mantine/core'
import JsonInput from '@atom/JsonInput'
import SegmentButton from '@atom/segmentButton'
import CheckList from '@molecule/CheckList'
import DropZone from '@organism/DropZone'
import type { FileWithPath } from '@mantine/dropzone'
import type { DropZoneProps } from '@interfaces/organism'
import type { SegmentButtonProps } from '@interfaces/atom'

export default function DeployVersionMapPage() {
  const [activeTab, setActiveTab] = useState<'file' | 'json'>('file')
  const [files, setFiles] = useState<FileWithPath[]>([])
  const [json, setJson] = useState<string>('{}')
  const [targetMap, setTargetMap] = useState<string | null>('lambda')

  useEffect(() => {
    if (activeTab === 'json') {
      setJson('{}')
    } else {
      setFiles([])
    }
  }, [activeTab])

  const segmentButtonProps: SegmentButtonProps = {
    data: [
      {
        value: 'file',
        label: 'File Upload',
        icon: 'Folder'
      },
      {
        value: 'json',
        label: 'JSON Input',
        icon: 'Braces'
      }
    ]
  }

  const dropZoneProps: DropZoneProps = {
    files,
    setFiles,
    title: 'Upload your file here',
    description: 'Please upload a 1 file in JSON format only, with a maximum size of 10MB.',
    idleIcon: 'FolderUp',
    acceptIcon: 'CloudUpload',
    rejectIcon: 'X',
    accept: ['application/json'],
    maxSize: 10 * 1024 ** 2,
    maxFiles: 1
  }

  return (
    <>
      <Group justify="flex-end" mb={5}>
        <SegmentButton
          {...segmentButtonProps}
          value={activeTab}
          onChange={(value) => setActiveTab(value as 'file' | 'json')}
        />
      </Group>
      <Container p={0} h={'220'}>
        {activeTab === 'file' ? <DropZone {...dropZoneProps} /> : <JsonInput value={json} onChange={setJson} />}
      </Container>
      <Stack mt="md">
        <Group>
          <Select
            label="Target Map"
            description="Select the target map"
            placeholder="Pick value"
            data={['Lambda', 'Topic', 'Ecs']}
            clearable
            required
            value={targetMap}
            onChange={setTargetMap}
          />
        </Group>
        <Stack>
          <CheckList
            size={{ width: '30%', height: 110 }}
            label="Target Application"
            description="Select the target application"
            required
            items={['Demo', 'RndQA', 'OpenGA', 'GMS', 'Aerosuite']}
          />
        </Stack>
        <Group justify="flex-end" mt={10}>
          <Button disabled>Deploy</Button>
        </Group>
      </Stack>
    </>
  )
}
