import { Group, Text, Radio, RadioGroup, Stack } from '@mantine/core'
import { useState } from 'react'

import { ActionsGrid } from '@renderer/components/ActionGrid'
import { ProjectConstant } from '@renderer/constant'

import SourceForm from '@renderer/components/SourceForm'

import type { SourceManagerType } from '@renderer/interface'

export function SourceManager(): JSX.Element {
  const [targetCategory, setTargetCategory] = useState<SourceManagerType>('')

  return (
    <>
      {targetCategory ? (
        <SourceContent type={targetCategory} />
      ) : (
        <ActionsGrid
          title="Source Manager"
          ActionItems={ProjectConstant.SOURCE_CATEGORY}
          onItemClick={(name) => setTargetCategory(name as SourceManagerType)}
        />
      )}
    </>
  )
}

function SourceContent({ type }: { type: SourceManagerType }): JSX.Element {
  const contents = {
    Lambda: <Lambda />,
    ECS: <ECS />,
    Framework: <Framework />,
    Application: <Application />,
    Studio: <Studio />,
  }

  return contents[type]
}

function Lambda(): JSX.Element {
  return (
    <div>
      <SourceForm onSubmit={() => {}}>
        {/* 1. Operation */}
        <Stack align="center" justify="centerflex-start">
          <Text size="xs" mt={7} fw={500}>
            Operation
          </Text>
          <Group>
            <Radio label="dd" />
            <Radio label="dd" />
          </Group>
        </Stack>
        {/* 2. Scope */}
        {/* 2.1 Select List */}
        {/* 3. Default Branch */}
        {/* 4. Version */}
        {/* 5. Package Install */}
      </SourceForm>
    </div>
  )
}

function ECS(): JSX.Element {
  return <div>ECS</div>
}

function Framework(): JSX.Element {
  return <div>Framework</div>
}

function Application(): JSX.Element {
  return <div>Application</div>
}

function Studio(): JSX.Element {
  return <div>Studio</div>
}
