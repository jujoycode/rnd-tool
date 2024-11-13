import { useState } from 'react'

import { OperationSelector } from '@organisms/OperationSelector'
import { SourceSelector } from '@organisms/SourceSelector'
import { Lambda } from '@pages/Lambda'
import { ErrorPage } from '@pages/ErrorrPage'

import type { OperationType, SourceType } from '@renderer/types'

export function SourceManagePage() {
  const [operation, setOperation] = useState<OperationType>()
  const [source, setSource] = useState<SourceType>()

  const renderSourceComponent = (sourceType: SourceType) => {
    switch (sourceType) {
      case 'lambda':
        return <Lambda />
      case 'ecs':
      case 'framework':
      case 'application':
      case 'studio':
      default:
        return <ErrorPage />
    }
  }

  return (
    <>
      {!operation && !source && <OperationSelector onSelect={setOperation} />}
      {operation && !source && <SourceSelector onSelect={setSource} operation={operation} />}
      {operation && source && renderSourceComponent(source)}
    </>
  )
}
