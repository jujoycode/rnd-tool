import { version as packageVersion } from '../../../../../package.json'
import { Container, Group, Code, Text } from '@mantine/core'
import type { NavbarHeaderProps } from '@interfaces/molecule'

export default function NavbarHeader({ title, version }: NavbarHeaderProps) {
  return (
    <Container>
      <Group align="center" justify="space-between">
        <Text fw={700}>{title}</Text>
        {version && <Code style={{ color: 'var(--mantine-color-gray-7)' }}>v{packageVersion}</Code>}
      </Group>
    </Container>
  )
}
