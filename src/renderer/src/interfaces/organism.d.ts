import type { DropzoneProps } from '@mantine/dropzone'
import type { IconName } from './atom'

interface DropZoneProps extends Partial<DropzoneProps> {
  title: string
  description: string
  idleIcon: IconName
  acceptIcon: IconName
  rejectIcon: IconName
}

export type { DropZoneProps }
