import ActionGridClass from "../style/ActionGrid.module.css";

import { Card, Text, SimpleGrid, UnstyledButton, Group } from "@mantine/core";
import { Icon } from "@renderer/components/Icon";

import type { ActionGridProps } from "@renderer/interface";

export function ActionsGrid(props: ActionGridProps) {
  const items = props.ActionItems.map((item) => (
    <UnstyledButton key={item.title} className={ActionGridClass.item}>
      <Icon name={item.icon} color={item.color} size={32} />
      <Text size="sm" mt={10} fw={500}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="lg" className={ActionGridClass.card} p="xl">
      <Group justify="space-between" mb={10}>
        <Text size="lg" fw={600} className={ActionGridClass.title}>
          Source Manager
        </Text>
      </Group>
      <SimpleGrid cols={3} mt="md" spacing="xl">
        {items}
      </SimpleGrid>
    </Card>
  );
}
