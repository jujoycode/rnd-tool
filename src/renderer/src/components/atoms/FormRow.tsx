import { Group, Text } from '@mantine/core'

interface FormRowProps {
  label: string
  children: React.ReactNode
}

export function FormRow({ label, children }: FormRowProps) {
  return (
    <Group justify="space-between" align="center">
      <Text size="xs" c="primary">
        {label}:
      </Text>
      {children}
    </Group>
  )
}