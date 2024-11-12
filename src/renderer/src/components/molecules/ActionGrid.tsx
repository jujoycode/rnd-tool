import ActionGridClass from '@renderer/style/ActionGrid.module.css'

import { memo, useCallback, useState } from 'react'
import { Text, Card, SimpleGrid, Stack } from '@mantine/core'

import { ActionButton } from '@atoms/ActionButton'

import type { ActionGridProps } from '@renderer/interface'

export const ActionGrid = memo((props: ActionGridProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const handleItemClick = useCallback(
    (value: string) => {
      setSelectedItem(value)
      props.onItemClick?.(value)
    },
    [props.onItemClick],
  )

  return (
    <Card withBorder radius="lg" className={ActionGridClass.card} p="xl">
      <Stack mb={10} gap={4}>
        <Text size="lg" fw={600} className={ActionGridClass.title}>
          {props.title}
        </Text>
        {props.description && (
          <Text size="xs" fw={300} c="themeColor.3">
            {props.description}
          </Text>
        )}
      </Stack>
      <SimpleGrid cols={props.ItemGrid ?? 3} mt="md" spacing="xl">
        {props.ActionItems.map((item) => (
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
