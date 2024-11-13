import { Group, Text } from '@mantine/core'

import type { FormRowProps } from '@renderer/types'

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
