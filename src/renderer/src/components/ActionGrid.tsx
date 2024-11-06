import ActionGridClass from "@renderer/style/ActionGrid.module.css"

import { useState } from "react"

import { Card, Text, SimpleGrid, UnstyledButton, Group } from "@mantine/core"
import { Icon } from "@renderer/components/Icon"

import type { ActionGridProps } from "@renderer/interface"

export function ActionsGrid(props: ActionGridProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const items = props.ActionItems.map((item) => (
    <UnstyledButton
      key={item.title}
      className={`${ActionGridClass.item} ${selectedItem === item.title ? ActionGridClass.selected : ""}`}
      onClick={() => {
        setSelectedItem(item.title)
        props.onItemClick?.(item.title)
      }}
    >
      <Icon name={item.icon} color={item.color} size={32} strokeWidth={1.5} />
      <Text size="xs" mt={7} fw={500} className={ActionGridClass.title}>
        {item.title}
      </Text>
    </UnstyledButton>
  ))

  return (
    <Card withBorder radius="lg" className={ActionGridClass.card} p="xl">
      <Group justify="space-between" mb={10}>
        <Text size="lg" fw={600} className={ActionGridClass.title}>
          {props.title}
        </Text>
      </Group>
      <SimpleGrid cols={3} mt="md" spacing="xl">
        {items}
      </SimpleGrid>
    </Card>
  )
}
