import { useState } from 'react'
import { Drawer, Stack, Text } from '@mantine/core'

import { SearchInput } from '@atoms/SearchInput'
import { RepositoryItem } from '@molecules/RepositoryItem'

import type { RepositoryModalProps } from '@renderer/types'

export function RepositoryModal({
  opened,
  onClose,
  repositories,
  selectedRepos,
  onSelectionChange,
}: RepositoryModalProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRepos = repositories.filter((repo) => repo.label.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
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
            isSelected={selectedRepos.includes(repo.value)}
            onSelect={(checked) =>
              onSelectionChange(
                checked ? [...selectedRepos, repo.value] : selectedRepos.filter((r) => r !== repo.value),
              )
            }
          />
        ))}
      </Stack>
    </Drawer>
  )
}
