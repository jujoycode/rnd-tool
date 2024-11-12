import SourceFormClass from '@renderer/style/SourceForm.module.css'

import { useState } from 'react'
import { Container } from '@mantine/core'

import { WorkingContextModal } from '@molecules/WorkingContextModal'
import { SourceFormContent } from '@molecules/SourceFormContent'

import type { SourceFormProps } from '@renderer/interface'

export function SourceForm(props: SourceFormProps) {
  const [path, setPath] = useState('')
  const [opened, setOpened] = useState(false)

  const handleClear = () => {
    setPath('')
    props.onClear()
  }

  const handleSubmit = () => {
    props.onSubmit?.()
    if (props.modalCondition) {
      setOpened(true)
    }
  }

  return (
    <>
      <WorkingContextModal opened={opened} onClose={() => setOpened(false)}>
        {props.modalContent}
      </WorkingContextModal>

      <Container fluid className={SourceFormClass.container}>
        <SourceFormContent
          title={props.title}
          path={path}
          onPathChange={setPath}
          onClear={handleClear}
          onSubmit={handleSubmit}
          isSubmitDisabled={path === '' || !props.modalCondition}
        >
          {props.children}
        </SourceFormContent>
      </Container>
    </>
  )
}
