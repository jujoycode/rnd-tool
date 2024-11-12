import { useState } from 'react'
import { Drawer, Stack, Text } from '@mantine/core'

import { SearchInput } from '@atoms/SearchInput'
import { RepositoryItem } from '@molecules/RepositoryItem'

import type { RepositoryModalProps } from '@renderer/interface'

export function RepositoryModal(props: RepositoryModalProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRepos = props.repositories.filter((repo) =>
    repo.label.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Drawer
      opened={props.opened}
      onClose={props.onClose}
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

        {filteredRepos.map((repo) => (
          <RepositoryItem
            key={repo.value}
            repo={repo}
            isSelected={props.selectedRepos.includes(repo.value)}
            onSelect={(checked) =>
              props.onSelectionChange(
                checked ? [...props.selectedRepos, repo.value] : props.selectedRepos.filter((r) => r !== repo.value),
              )
            }
          />
        ))}
      </Stack>
    </Drawer>
  )
}
