import { useSourceStore } from '@stores/sourceStore'
import { useBackKey } from '@hooks/common/useBackKey'

import { OperationSelector } from '@organisms/OperationSelector'
import { SourceSelector } from '@organisms/SourceSelector'
import { Lambda } from '@pages/Lambda'
import { ErrorPage } from '@pages/ErrorrPage'

import type { SourceType } from '@renderer/types'

export function SourceManagePage() {
  const { operation, source, setOperation, setSource } = useSourceStore()

  const handleBack = () => {
    if (source) {
      setSource(null)
      return
    }

    if (operation) {
      setOperation(null)
      return
    }
  }

  useBackKey({ onBack: handleBack })

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
      {!operation && !source && <OperationSelector />}
      {operation && !source && <SourceSelector />}
      {operation && source && renderSourceComponent(source)}
    </>
  )
}
