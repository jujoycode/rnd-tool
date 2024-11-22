import { Group, Paper, rem, Text } from '@mantine/core'
import { Dropzone } from '@mantine/dropzone'
import Icon from '@atom/Icon'
import type { DropZoneProps } from '@interfaces/organism'

export default function DropZone({ title, description, idleIcon, acceptIcon, rejectIcon, ...props }: DropZoneProps) {
  return (
    <Paper withBorder>
      <Dropzone
        onDrop={(files) => console.log('accepted files', files)}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={5 * 1024 ** 2}
        {...props}
      >
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
            <Text size="xl" inline fw={700} c="gray.8">
              {title}
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              {description}
            </Text>
          </div>
        </Group>
      </Dropzone>
    </Paper>
  )
}
