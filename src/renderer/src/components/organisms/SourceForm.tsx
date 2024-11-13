import SourceFormClass from '@renderer/style/SourceForm.module.css'

import { useState } from 'react'
import { Container } from '@mantine/core'

import { WorkingContextModal } from '@molecules/WorkingContextModal'
import { SourceFormContent } from '@molecules/SourceFormContent'

import type { SourceFormProps } from '@renderer/types'

export function SourceForm({ onClear, onSubmit, modalCondition, modalContent, title, children }: SourceFormProps) {
  const [path, setPath] = useState('')
  const [opened, setOpened] = useState(false)

  const handleClear = () => {
    setPath('')
    onClear?.()
  }

  const handleSubmit = () => {
    onSubmit?.()
    if (modalCondition) {
      setOpened(true)
    }
  }

  return (
    <>
      <WorkingContextModal opened={opened} onClose={() => setOpened(false)}>
        {modalContent}
      </WorkingContextModal>

      <Container fluid className={SourceFormClass.container}>
        <SourceFormContent
          title={title}
          path={path}
          onPathChange={setPath}
          onClear={handleClear}
          onSubmit={handleSubmit}
          isSubmitDisabled={path === '' || !modalCondition}
        >
          {children}
        </SourceFormContent>
      </Container>
    </>
  )
}
