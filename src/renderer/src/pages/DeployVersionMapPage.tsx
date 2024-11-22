import DropZone from '@organism/DropZone'
import type { DropZoneProps } from '@interfaces/organism'

export default function DeployVersionMapPage() {
  const dropZoneProps: DropZoneProps = {
    title: 'Upload your map file here',
    description: 'Accepts `.json` files, Only 1 file is allowed',
    idleIcon: 'FolderCode',
    acceptIcon: 'CloudUpload',
    rejectIcon: 'X',
    accept: ['application/json'],
    maxFiles: 1
  }

  return <DropZone {...dropZoneProps} />
}
