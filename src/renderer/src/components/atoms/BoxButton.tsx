import { Paper, Group, Text } from '@mantine/core'
import { Icon } from '@atoms/Icon'

import type { BoxButton } from '@renderer/types'

export function BoxButton({ title, value, iconName }: BoxButton) {
  return (
    <Paper withBorder radius="md" p="xs">
      <Group>
        <Icon name={iconName} size={24} strokeWidth={1.5} />
        <div>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {title}
          </Text>
          <Text fw={700} size="md">
            {value}
          </Text>
        </div>
      </Group>
    </Paper>
  )
}
