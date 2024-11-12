import ActionGridClass from '@renderer/style/ActionGrid.module.css'

import { memo, useCallback, useState } from 'react'
import { Card, SimpleGrid } from '@mantine/core'

import { ActionGridHeader } from '@molecules/ActionGridHeader'
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
      <ActionGridHeader title={props.title} description={props.description} />
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
