import { Group, Stack, Text, Checkbox } from '@mantine/core'

import type { RepositoryItemProps } from '@renderer/types'

export function RepositoryItem({ repo, isSelected, onSelect }: RepositoryItemProps) {
  return (
    <Group wrap="nowrap">
      <Checkbox
        color="themeColor.7"
        checked={isSelected}
        onChange={(event) => onSelect(event.currentTarget.checked)}
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
  )
}
