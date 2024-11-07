import { useState } from 'react'

import { Lambda } from '@renderer/screen/SourceManager/Lambda'
import { ActionsGrid } from '@renderer/components/ActionGrid'
import { ProjectConstant } from '@renderer/constant'

import type { SourceType, OperationType } from '@renderer/interface'

export function SourceManager(): JSX.Element {
  const [source, setSource] = useState<SourceType>()
  const [operation, setOperation] = useState<OperationType>()

  return (
    <>
      {!source && !operation && <SourceItemGrid onItemClick={(v) => setSource(v)} />}
      {source && !operation && <OperationItemGrid onItemClick={(v) => setOperation(v)} />}
      {source && operation && <TargetComponent sourcType={source} operationType={operation} />}
    </>
  )
}

function SourceItemGrid({ onItemClick }: { onItemClick: (value: SourceType) => void }) {
  return (
    <ActionsGrid
      title="Source Manager"
      ActionItems={ProjectConstant.SOURCE_CATEGORY}
      onItemClick={(v) => onItemClick(v as SourceType)}
    />
  )
}

function OperationItemGrid({ onItemClick }: { onItemClick: (value: OperationType) => void }) {
  return (
    <ActionsGrid
      title="Operation"
      ActionItems={ProjectConstant.OPERATION_CATEGORY}
      ItemGrid={2}
      onItemClick={(v) => onItemClick(v as OperationType)}
    />
  )
}

function TargetComponent({ sourcType, operationType }: { sourcType: SourceType; operationType: OperationType }) {
  switch (sourcType) {
    case 'Lambda': {
      return <Lambda operation={operationType} />
    }
    case 'ECS': {
      return <></>
    }
    case 'Framework': {
      return <></>
    }
    case 'Application': {
      return <></>
    }
    case 'Studio': {
      return <></>
    }
  }
}
