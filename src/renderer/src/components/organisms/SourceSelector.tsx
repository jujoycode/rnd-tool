import { useSourceStore } from '@renderer/hooks/stores/sourceStore'

import { ActionGrid } from '@molecules/ActionGrid'
import { ProjectConstant } from '@renderer/constant'

import type { SourceType } from '@renderer/types'

export function SourceSelector() {
  const { operation, setSource } = useSourceStore()

  return (
    <ActionGrid
      title="Source Manager"
      description={`Select the category you want to ${operation}`}
      ActionItems={ProjectConstant.SOURCE_CATEGORY}
      onItemClick={(v) => setSource(v as SourceType)}
    />
  )
}
