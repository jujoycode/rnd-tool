import ActionGridClass from '@renderer/style/ActionGrid.module.css'

import { memo, useCallback, useState } from 'react'
import { Text, Card, SimpleGrid, Stack, Group } from '@mantine/core'
import { ActionButton } from '@atoms/ActionButton'

import type { ActionGridProps } from '@renderer/types'

export const ActionGrid = memo(({ title, description, ActionItems, ItemGrid, onItemClick }: ActionGridProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const handleItemClick = useCallback(
    (value: string) => {
      setSelectedItem(value)
      onItemClick?.(value)
    },
    [onItemClick],
  )

  return (
    <Card withBorder radius="lg" className={ActionGridClass.card} p="xl">
      <Stack mb={10} gap={4}>
        <Group justify="space-between" align="center">
          <Text size="lg" fw={600} className={ActionGridClass.title}>
            {title}
          </Text>
        </Group>
        {description && (
          <Text size="xs" fw={300} c="themeColor.3">
            {description}
          </Text>
        )}
      </Stack>
      <SimpleGrid cols={ItemGrid ?? 3} mt="md" spacing="xl">
        {ActionItems.map((item) => (
          <ActionButton
            key={item.title}
            item={item}
            isSelected={selectedItem === item.title}
            onItemClick={handleItemClick}
          />
        ))}
      </SimpleGrid>
    </Card>
  )
})
