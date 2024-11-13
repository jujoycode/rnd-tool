import { ActionGrid } from '@molecules/ActionGrid'

import { ProjectConstant } from '@renderer/constant'

import type { OperationType, SourceType } from '@renderer/types'

export function SourceSelector({
  onSelect,
  operation,
}: {
  onSelect: (value: SourceType) => void
  operation: OperationType
}) {
  return (
    <ActionGrid
      title="Source Manager"
      description={`Select the category you want to ${operation}`}
      ActionItems={ProjectConstant.SOURCE_CATEGORY}
      onItemClick={(v) => onSelect(v as SourceType)}
    />
  )
}
