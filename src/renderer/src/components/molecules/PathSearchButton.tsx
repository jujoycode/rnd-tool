import SourceFormClass from '@renderer/style/SourceForm.module.css'

import { Icon } from '@atoms/Icon'

//ENHANCE: 폴더 선택 / 파일 선택 할 수 있도록 properties 추가
export function PathSearchButton({ setPath }: { setPath: (path: string) => void }) {
  return (
    <Icon
      className={SourceFormClass.button}
      name="Search"
      size={16}
      onClick={() => {
        window.electron.ipcRenderer.send('getTargetPath')
        window.electron.ipcRenderer.once('getTargetPath', (_, args) => {
          if (args?.canceled) {
            return
          }

          setPath(args?.filePaths[0])
        })
      }}
    />
  )
}
