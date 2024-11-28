import { Group, Paper, rem, Text, Stack, List, ActionIcon } from '@mantine/core'
import { Dropzone, type FileWithPath, type FileRejection } from '@mantine/dropzone'
import { showNotification } from '@mantine/notifications'
import Icon from '@atom/Icon'
import type { DropZoneProps } from '@interfaces/organism'

export default function DropZone({
  files,
  setFiles,
  title,
  description,
  idleIcon,
  acceptIcon,
  rejectIcon,
  ...props
}: DropZoneProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleOnDrop = (acceptedFiles: FileWithPath[]) => {
    console.log('acceptedFiles', acceptedFiles)
    setFiles(acceptedFiles)
  }

  const handleOnReject = (fileRejections: FileRejection[]) => {
    showNotification({
      withBorder: true,
      icon: <Icon name={rejectIcon} />,
      color: 'red',
      title: `Upload Rejected (${fileRejections.map(({ file }) => file.name).join(', ')})`,
      message: fileRejections.map((file) => file.errors.map((error) => error.message).join(', ')).join('\n')
    })
  }

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  return (
    <Stack gap="sm">
      <Paper withBorder>
        <Dropzone onDrop={handleOnDrop} onReject={handleOnReject} {...props}>
          <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
            <Dropzone.Accept>
              <Icon
                name={acceptIcon}
                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-myColor-7)' }}
                strokeWidth={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <Icon
                name={rejectIcon}
                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                strokeWidth={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <Icon
                name={idleIcon}
                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                strokeWidth={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline fw={700} c="gray.6">
                {title}
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                {description}
              </Text>
            </div>
          </Group>
        </Dropzone>
      </Paper>

      {files.length > 0 && (
        <List spacing="md" ml="xl">
          {files.map((file, index) => (
            <List.Item key={index}>
              <Group justify="space-between">
                <Text size="sm">{file.name}</Text>
                <Text size="sm" c="dimmed">
                  {formatFileSize(file.size)}
                </Text>

                <ActionIcon
                  variant="subtle"
                  size={16}
                  radius="xl"
                  color="gray.6"
                  onClick={() => handleRemoveFile(index)}
                >
                  <Icon name="X" />
                </ActionIcon>
              </Group>
            </List.Item>
          ))}
        </List>
      )}
    </Stack>
  )
}
