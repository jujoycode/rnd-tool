import { Badge, Button, Group, Paper, Stack, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import Icon from '@atom/Icon'
import type { ItemCardProps } from '@interfaces/molecule'

export default function ItemCard({ label, iconName, resource, nextPath, children }: ItemCardProps): JSX.Element {
  const navigate = useNavigate()

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

      {children}

      <Button fullWidth mt="xl" variant="outline" radius="md" onClick={() => navigate(nextPath!)}>
        Start
      </Button>
    </Paper>
  )
}
