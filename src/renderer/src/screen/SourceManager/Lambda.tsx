import { Stack, Text, Switch, SegmentedControl, Group, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import SourceForm from '@renderer/components/SourceForm'
import { RepositoryModal } from './RepositoryModal'

export function Lambda() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const form = useForm({
    initialValues: {
      version: 'v2',
      installPackages: false,
      installType: 'all',
      selectedRepos: [],
    },
  })

  const handleSubmit = () => {
    // 제출 로직 구현
  }

  const handleClear = () => {
    form.reset()
  }

  const repoOptions = [
    { value: 'CalsComWebCommonSelectData', label: 'CalsComWebCommonSelectData', description: '/ComCommonSelect' },
    { value: 'CalsComWebCommonSaveData', label: 'CalsComWebCommonSaveData', description: '/ComCommonSave' },
    { value: 'CalsComWebCommonDeleteData', label: 'CalsComWebCommonDeleteData', description: '/ComCommonSave' },
  ]

  const repositories = repoOptions.map((repo) => repo.value)

  return (
    <>
      <SourceForm
        title="Lambda"
        onSubmit={handleSubmit}
        onClear={handleClear}
        modalCondition={form.values.installType === 'all' || form.values.selectedRepos.length > 0}
        modalContent={<Text>Processing lambda sources...</Text>}
      >
        <Stack gap="md">
          <Group justify="space-between" align="center">
            <Text size="xs" c="primary">
              Version:
            </Text>
            <SegmentedControl
              w={150}
              size="xs"
              radius="md"
              data={[
                { label: 'v1', value: 'v1' },
                { label: 'v2', value: 'v2' },
              ]}
              {...form.getInputProps('version')}
            />
          </Group>

          <Group justify="space-between" align="center">
            <Text size="xs" c="primary">
              Include Packages:
            </Text>
            <Switch
              size="lg"
              color="themeColor.6"
              onLabel="Yes"
              offLabel="No"
              {...form.getInputProps('installPackages', { type: 'checkbox' })}
            />
          </Group>
          <Group justify="space-between" align="center">
            <Text size="xs" c="primary">
              Installation Type:
            </Text>
            <SegmentedControl
              w={150}
              size="xs"
              radius="md"
              data={[
                { label: 'All', value: 'all' },
                { label: 'Selected', value: 'selected' },
              ]}
              {...form.getInputProps('installType')}
              onChange={(value) => {
                form.setFieldValue('installType', value)
                form.setFieldValue('selectedRepos', [])
              }}
            />
          </Group>

          {form.values.installType === 'selected' && (
            <Group justify="space-between" align="center">
              <Text size="xs" c="primary">
                Target:
              </Text>
              <Button size="xs" variant="light" color="themeColor.6" onClick={() => setDrawerOpened(true)}>
                {form.values.selectedRepos.length} selected
              </Button>
            </Group>
          )}
        </Stack>
      </SourceForm>

      <RepositoryModal
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        repositories={repositories}
        selectedRepos={form.values.selectedRepos}
        onSelectionChange={(selected) => form.setFieldValue('selectedRepos', selected as never[])}
      />
    </>
  )
}
