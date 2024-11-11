import { useState } from 'react'

import { Lambda } from '@renderer/screen/SourceManager/Lambda'
import { ActionsGrid } from '@renderer/components/ActionGrid'
import { ProjectConstant } from '@renderer/constant'

import type { SourceType, OperationType } from '@renderer/interface'

export function SourceManager(): JSX.Element {
  const [operation, setOperation] = useState<OperationType>()
  const [source, setSource] = useState<SourceType>()

  return (
    <>
      {!operation && !source && <OperationItemGrid onItemClick={(v) => setOperation(v)} />}
      {operation && !source && <SourceItemGrid onItemClick={(v) => setSource(v)} operation={operation} />}
      {operation && source && <TargetComponent sourcType={source} />}
    </>
  )
}

function OperationItemGrid({ onItemClick }: { onItemClick: (value: OperationType) => void }) {
  return (
    <ActionsGrid
      title="Operation"
      description="What would you like to do with your source?"
      ActionItems={ProjectConstant.OPERATION_CATEGORY}
      ItemGrid={2}
      onItemClick={(v) => onItemClick(v as OperationType)}
    />
  )
}

function SourceItemGrid({
  onItemClick,
  operation,
}: {
  onItemClick: (value: SourceType) => void
  operation: OperationType
}) {
  return (
    <ActionsGrid
      title="Source Manager"
      description={`Select the category you want to ${operation}`}
      ActionItems={ProjectConstant.SOURCE_CATEGORY}
      onItemClick={(v) => onItemClick(v as SourceType)}
    />
  )
}

function TargetComponent({ sourcType }: { sourcType: SourceType }) {
  switch (sourcType) {
    case 'lambda': {
      return <Lambda />
    }
    case 'ecs': {
      return <></>
    }
    case 'framework': {
      return <></>
    }
    case 'application': {
      return <></>
    }
    case 'studio': {
      return <></>
    }
  }
}
