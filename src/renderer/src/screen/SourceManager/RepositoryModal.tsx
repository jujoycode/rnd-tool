import { useState } from 'react'

import { Drawer, Group, Paper, Stack, Text, TextInput, Checkbox } from '@mantine/core'
import { Icon } from '@renderer/components/Icon'

interface RepositoryModalProps {
  opened: boolean
  onClose: () => void
  repositories: string[]
  selectedRepos: string[]
  onSelectionChange: (selected: string[]) => void
}

export function RepositoryModal(props: RepositoryModalProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRepos = props.repositories.filter((repo) => repo.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Drawer
      opened={props.opened}
      onClose={() => props.onClose()}
      position="right"
      size="md"
      title={
        <Text size="sm" fw={600} c="primary">
          Target Repositories
        </Text>
      }
    >
      <Stack gap="md">
        <TextInput
          placeholder="Search repositories..."
          leftSection={<Icon name="Search" size={16} />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          size="xs"
        />

        <Paper style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
          <Stack gap="xs">
            {filteredRepos.map((repo) => (
              <Group key={repo} wrap="nowrap">
                <Checkbox
                  checked={props.selectedRepos.includes(repo)}
                  onChange={(event) => {
                    const checked = event.currentTarget.checked
                    const newSelection = checked
                      ? [...props.selectedRepos, repo]
                      : props.selectedRepos.filter((r) => r !== repo)
                    props.onSelectionChange(newSelection)
                  }}
                  label={
                    <Text size="xs" fw={500}>
                      {repo}
                    </Text>
                  }
                />
              </Group>
            ))}
          </Stack>
        </Paper>
      </Stack>
    </Drawer>
  )
}
