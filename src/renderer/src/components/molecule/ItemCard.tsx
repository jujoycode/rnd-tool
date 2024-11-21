import { Badge, Button, Group, Paper, Stack, Text } from '@mantine/core'
import type { ItemCardProps } from '@interfaces/molecule'
import Icon from '../atom/Icon'

export default function ItemCard({ label, iconName, resource }: ItemCardProps): JSX.Element {
  return (
    <Paper withBorder shadow="md" radius="md" p="md">
      <Stack mt="md" mb="md">
        <Group gap="xs">
          <Icon name={iconName} />
          <Text fw={500}>{label}</Text>
        </Group>
        <Group gap="xs">
          {resource.map((res, index) => (
            <Badge key={index} color={res.color} size="xs">
              {res.label}
            </Badge>
          ))}
        </Group>
      </Stack>

      <Button fullWidth mt="xl" variant="light" color="gray.8" radius="md">
        Start
      </Button>
    </Paper>
  )
}
