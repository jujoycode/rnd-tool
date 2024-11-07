import { Group, Text, Radio, RadioGroup, Stack, TextInput, Checkbox, Switch, Box, Paper } from '@mantine/core'
import { useEffect, useState } from 'react'

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
  const [startFlag, setStartFlag] = useState(false)
  const [operation, setOperation] = useState('')
  const [scope, setScope] = useState('')
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [defaultBranch, setDefaultBranch] = useState(false)
  const [priorityCount, setPriorityCount] = useState(1)
  const [v2Flag, setV2Flag] = useState(true)
  const [packageInstallFlag, setPackageInstallFlag] = useState(false)
  const [process, setProcess] = useState<number>(0)

  /**
   * handleClear
   * @desc 전체 값 초기화
   */
  function handleClear() {
    setOperation('')
    setScope('')
    setSelectedItems([])
    setDefaultBranch(false)
    setV2Flag(true)
    setPackageInstallFlag(false)
  }

  /**
   * handleSubmit
   * @desc Start 버튼 클릭 시 동작
   */
  function handleSubmit() {
    const startParam = {
      operation,
      scope,
      selectedItems: scope === 'selected' ? selectedItems : undefined,
      v2Flag,
      packageInstallFlag,
    }

    window.electron.ipcRenderer.send(`${operation}Lambda`, startParam)
  }

  // scope가 all일 경우, selectedItems 초기화
  useEffect(() => {
    if (scope === 'all') {
      setSelectedItems([])
    }
  }, [scope, selectedItems])

  /**
   * 시작 버튼 활성화 여부 판단
   * @desc1 operation이 공백이라면 비활성화
   * @desc2 scope가 공백이라면 비활성화
   * @desc3 scope가 selected이면서 selectedItems가 빈 배열이라면 비활성화
   */
  useEffect(() => {
    const shouldDisableStart = operation === '' || scope === '' || (scope === 'selected' && selectedItems.length === 0)

    setStartFlag(!shouldDisableStart)
  }, [operation, scope, selectedItems])

  const modalContent = <div>modal</div>

  return (
    <SourceForm
      title="Lambda"
      onClear={handleClear}
      onSubmit={handleSubmit}
      modalCondition={startFlag}
      modalContent={modalContent}
    >
      <Stack gap="xl">
        <Paper withBorder p="md">
          <Text size="md" fw={600} mb="md">
            Basic Settings
          </Text>
          <Stack gap="md">
            <RadioGroup
              label={
                <Text fw={500} size="sm">
                  Operation
                </Text>
              }
              value={operation}
              onChange={setOperation}
            >
              <Group mt={4}>
                <Radio w={100} color="themeColor.6" value="download" label="Download" />
                <Radio w={100} color="themeColor.6" value="update" label="Update" />
              </Group>
            </RadioGroup>

            <RadioGroup
              label={
                <Text fw={500} size="sm">
                  Scope
                </Text>
              }
              value={scope}
              onChange={setScope}
            >
              <Group mt={4}>
                <Radio w={100} color="themeColor.6" value="all" label="All" />
                <Radio w={100} color="themeColor.6" value="selected" label="Selected" />
              </Group>
            </RadioGroup>

            {scope === 'selected' && (
              <Checkbox.Group value={selectedItems} onChange={setSelectedItems}>
                <Box ml={16}>
                  <Stack gap={8}>
                    <Checkbox
                      color="themeColor.6"
                      value="CalsComWebCommonSelectData"
                      label="CalsComWebCommonSelectData"
                    />
                  </Stack>
                </Box>
              </Checkbox.Group>
            )}

            <Group justify="space-between" align="center">
              <Text fw={500} size="sm">
                Default Branch
              </Text>
              <Switch
                size="md"
                color="themeColor.6"
                onLabel="Yes"
                offLabel="No"
                checked={defaultBranch}
                onChange={(event) => setDefaultBranch(event.currentTarget.checked)}
              />
            </Group>

            {defaultBranch && (
              <Stack gap={8} ml={16}>
                <TextInput size="sm" placeholder="Enter branch name" label="Priority 1" required />
                {priorityCount >= 2 && (
                  <TextInput size="sm" placeholder="Enter branch name (optional)" label="Priority 2" />
                )}
                {priorityCount === 3 && (
                  <TextInput size="sm" placeholder="Enter branch name (optional)" label="Priority 3" />
                )}
                {priorityCount < 3 && (
                  <Text
                    size="sm"
                    c="themeColor.4"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setPriorityCount((prev) => prev + 1)}
                  >
                    + Add priority
                  </Text>
                )}
              </Stack>
            )}
          </Stack>
        </Paper>

        <Paper withBorder p="md">
          <Text size="md" fw={600} mb="md">
            Configuration
          </Text>
          <Stack gap="md">
            <Group justify="space-between" align="center">
              <Text fw={500} size="sm">
                Version
              </Text>
              <Switch
                size="md"
                color="themeColor.6"
                onLabel="v2"
                offLabel="v1"
                checked={v2Flag}
                onChange={(event) => setV2Flag(event.currentTarget.checked)}
              />
            </Group>

            <Group justify="space-between" align="center">
              <Text fw={500} size="sm">
                Package Install
              </Text>
              <Switch
                size="md"
                color="themeColor.6"
                onLabel="Yes"
                offLabel="No"
                checked={packageInstallFlag}
                onChange={(event) => setPackageInstallFlag(event.currentTarget.checked)}
              />
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </SourceForm>
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
