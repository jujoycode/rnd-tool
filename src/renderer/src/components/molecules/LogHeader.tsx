import { Text, Group, UnstyledButton } from '@mantine/core'

import { Icon } from '@atoms/Icon'

import { LogHeaderProps } from '@renderer/types'

export function LogHeader({ opened, onToggle }: LogHeaderProps) {
  return (
    <UnstyledButton onClick={onToggle} w="100%">
      <Group p="xs" bg="gray.0" justify="space-between">
        <Group gap={4}>
          <Icon name="SquareTerminal" size={14} />
          <Text size="xs" c="primary">
            Log
          </Text>
        </Group>
        <Icon name={opened ? 'ChevronDown' : 'ChevronUp'} size={14} />
      </Group>
    </UnstyledButton>
  )
}
