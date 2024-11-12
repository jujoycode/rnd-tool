import { Group, Title, Text, Button } from '@mantine/core'

interface SourceFormHeaderProps {
  title: string
  onClear: () => void
}

export function SourceFormHeader({ title, onClear }: SourceFormHeaderProps) {
  return (
    <Group justify="space-between">
      <Group>
        <Title order={4}>{title}</Title>
        <Text c="dimmed" size="sm">
          Source Manager
        </Text>
      </Group>
      <Button variant="subtle" color="gray" size="sm" onClick={onClear}>
        Clear
      </Button>
    </Group>
  )
}