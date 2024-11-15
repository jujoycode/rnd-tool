import { Paper, Group, Text } from '@mantine/core'

export function BoxButton() {
  return (
    <>
      <Paper withBorder radius="md" p="xs">
        <Group>
          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              Source Manage
            </Text>
            <Text fw={700} size="xl">
              Source Manage
            </Text>
          </div>
        </Group>
      </Paper>
    </>
  )
}
