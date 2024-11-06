import SourceFormClass from '@renderer/style/SourceForm.module.css'

import { useState } from 'react'

import { FloatingLabelInput } from '@renderer/components/FloatingLabelInput'
import { Icon } from '@renderer/components/Icon'

import type { SourceFormProps } from '@renderer/interface'

export default function SourceForm(props: SourceFormProps) {
  const [path, setPath] = useState('')

  const PathSearchButton = (
    <Icon
      className={SourceFormClass.button}
      name="Search"
      size={16}
      onClick={() => {
        window.electron.ipcRenderer.send('getTargetPath')
        window.electron.ipcRenderer.once('getTargetPath', (_, args) => {
          console.log(args)
        })
      }}
    />
  )

  return (
    <>
      <FloatingLabelInput
        label="Path"
        value={path}
        onChange={(event) => setPath(event.currentTarget.value)}
        rightSection={PathSearchButton}
      />
      {props.children}
    </>
  )
}
