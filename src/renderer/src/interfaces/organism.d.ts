import type { DropzoneProps, FileWithPath } from '@mantine/dropzone'
import type { IconName } from './atom'

interface DropZoneProps extends Partial<DropzoneProps> {
  files: FileWithPath[]
  setFiles: (files: FileWithPath[]) => void
  title: string
  description: string
  idleIcon: IconName
  acceptIcon: IconName
  rejectIcon: IconName
}

export type { DropZoneProps }
