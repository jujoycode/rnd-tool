import ActionGridClass from '@renderer/style/ActionGrid.module.css'

import { memo, useCallback, useState } from 'react'

import { Card, Text, SimpleGrid, UnstyledButton, Stack } from '@mantine/core'
import { Icon } from '@renderer/components/Icon'

import type { ActionGridProps, ActionItem } from '@renderer/interface'

const GridItem = memo(
  ({
    item,
    isSelected,
    onItemClick,
  }: {
    item: ActionItem
    isSelected: boolean
    onItemClick: (value: string) => void
  }) => {
    return (
      <UnstyledButton
        className={`${ActionGridClass.item} ${isSelected ? ActionGridClass.selected : ''}`}
        onClick={() => onItemClick(item.value)}
        disabled={item.disabled}
      >
        <div className={ActionGridClass.iconWrapper}>
          <Icon name={item.icon} size={32} strokeWidth={1.5} />
        </div>
        <Text size="xs" mt={7} fw={500} className={ActionGridClass.title}>
          {item.title}
        </Text>
      </UnstyledButton>
    )
  },
)

export function ActionsGrid(props: ActionGridProps) {
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
        <Text size="xs" fw={300} c="themeColor.3">
          {props.description}
        </Text>
      </Stack>
      <SimpleGrid cols={props.ItemGrid ? props.ItemGrid : 3} mt="md" spacing="xl">
        {props.ActionItems.map((item) => (
          <GridItem
            key={item.title}
            item={item}
            isSelected={selectedItem === item.title}
            onItemClick={handleItemClick}
          />
        ))}
      </SimpleGrid>
    </Card>
  )
}
