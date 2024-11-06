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
        window.electron.ipcRenderer.sendSync('getTargetPath')

        window.electron.ipcRenderer.on('getTargetPath', (event, args) => {
          console.log('getTargetPath', args)
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
