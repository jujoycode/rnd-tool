import { ActionGrid } from '@organisms/ActionGrid'
import { ProjectConstant } from '@renderer/constant'

import type { OperationType } from '@renderer/interface'

interface OperationSelectorProps {
  onSelect: (value: OperationType) => void
}

export function OperationSelector({ onSelect }: OperationSelectorProps) {
  return (
    <ActionGrid
      title="Operation"
      description="What would you like to do with your source?"
      ActionItems={ProjectConstant.OPERATION_CATEGORY}
      ItemGrid={2}
      onItemClick={(v) => onSelect(v as OperationType)}
    />
  )
}
