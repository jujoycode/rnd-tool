import { Avatar, Group, Stack, Text } from '@mantine/core'
import type { NavbarFooterProps } from '@interfaces/molecule'
import Icon from '@atom/Icon'

export default function NavbarFooter({ username, usermail }: NavbarFooterProps) {
  return (
    <Group align="center" justify="flex-start" gap="sm">
      <Avatar variant="default" radius="xl" size="md">
        <Icon name="User" strokeWidth={1} />
      </Avatar>
      <Stack gap={0}>
        <Text c="gray.7">{username}</Text>
        <Text size="xs" c="gray.6">
          {usermail}
        </Text>
      </Stack>
    </Group>
  )
}
