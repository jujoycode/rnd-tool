import { useSourceStore } from '@renderer/hooks/stores/sourceStore'

import { ActionGrid } from '@molecules/ActionGrid'
import { ProjectConstant } from '@renderer/constant'

import type { OperationType } from '@renderer/types'

export function OperationSelector() {
  const { setOperation } = useSourceStore()

  return (
    <ActionGrid
      title="Operation"
      description="What would you like to do with your source?"
      ActionItems={ProjectConstant.OPERATION_CATEGORY}
      ItemGrid={2}
      onItemClick={(v) => setOperation(v as OperationType)}
    />
  )
}
