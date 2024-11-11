import { useState } from 'react'

import { Drawer, Group, Paper, Stack, Text, TextInput, Checkbox } from '@mantine/core'
import { Icon } from '@renderer/components/Icon'

import type { RepositoryListProps, RepositoryModalProps } from '@renderer/interface'

function SearchInput(props: { value: string; onChange: (value: string) => void }): JSX.Element {
  return (
    <TextInput
      placeholder="Search repositories..."
      leftSection={<Icon name="Search" size={16} />}
      value={props.value}
      onChange={(e) => props.onChange(e.currentTarget.value)}
      size="xs"
    />
  )
}

function RepositoryList(props: RepositoryListProps): JSX.Element {
  return (
    <Paper style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
      <Stack gap="xs">
        {props.repositories.map((repo) => (
          <Group key={repo.value} wrap="nowrap">
            <Checkbox
              color="themeColor.7"
              checked={props.selectedRepos.includes(repo.value)}
              onChange={(event) => {
                const checked = event.currentTarget.checked
                props.onSelectionChange(
                  checked ? [...props.selectedRepos, repo.value] : props.selectedRepos.filter((r) => r !== repo.value),
                )
              }}
              label={
                <Stack gap={2}>
                  <Text size="xs" fw={500}>
                    {repo.label}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {repo.description}
                  </Text>
                </Stack>
              }
            />
          </Group>
        ))}
      </Stack>
    </Paper>
  )
}

export function RepositoryModal(props: RepositoryModalProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRepos = props.repositories.filter((repo) =>
    repo.label.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Drawer
      opened={props.opened}
      onClose={() => props.onClose()}
      position="right"
      size="sm"
      title={
        <Text size="sm" fw={600} c="primary">
          Target Repositories
        </Text>
      }
    >
      <Stack gap="md">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <RepositoryList
          repositories={filteredRepos}
          selectedRepos={props.selectedRepos}
          onSelectionChange={props.onSelectionChange}
        />
      </Stack>
    </Drawer>
  )
}
