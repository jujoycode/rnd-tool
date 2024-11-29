import type { SegmentButtonProps } from '@interfaces/atom'
import type { DropZoneProps } from '@interfaces/organism'

export const VersionSegmentButtonProps: SegmentButtonProps = {
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

export const MapFileDropZoneProps: DropZoneProps = {
  files: [],
  setFiles: () => {},
  title: 'Upload your file here',
  description: 'Please upload a 1 file in JSON format only, with a maximum size of 10MB.',
  idleIcon: 'FolderUp',
  acceptIcon: 'CloudUpload',
  rejectIcon: 'X',
  accept: ['application/json'],
  maxSize: 10 * 1024 ** 2,
  maxFiles: 1
}
