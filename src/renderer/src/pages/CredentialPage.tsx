import {
  Title,
  Container,
  Text,
  Stack,
  Paper,
  Collapse,
  Group,
  Divider,
  SimpleGrid,
  TextInput,
  Checkbox,
  Box,
  ScrollArea,
  Button,
  ActionIcon,
  CloseButton,
  Badge,
  Popover
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Icon from '@atom/Icon'
import { useState } from 'react'

export default function CredentialPage() {
  const [opened, { toggle }] = useDisclosure(false)
  const [listToggle, { toggle: onListToggle }] = useDisclosure(false)
  const [profiles] = useState([
    { name: 'Default Profile', description: 'CD Profile', isDefault: true },
    { name: 'App Development', description: 'CA Profile', isDefault: false },
    { name: 'Sandbox Development', description: 'CPD Profile', isDefault: false },
    { name: 'Prod Development', description: 'CP Profile', isDefault: false }
  ])

  return (
    <Container w="80%">
      <ScrollArea.Autosize>
        <Stack justify="center" mt="md" gap={5}>
          <Title order={2}>Credentials</Title>
          <Text mt={0} size="sm" c="dimmed">
            These credentials allow you to control your entire resources. Be careful!
          </Text>

          <Paper withBorder p="md" mt="md">
            <Group align="center" justify="space-between" onClick={toggle}>
              <Text size="sm" fw={500}>
                Create Profile
              </Text>
              <Icon name={opened ? 'ChevronUp' : 'ChevronDown'} size={20} strokeWidth={1.5} />
            </Group>

            <Collapse in={opened} mt="md" transitionDuration={600}>
              <Stack>
                <Divider />
                <SimpleGrid cols={2}>
                  <TextInput placeholder="New Profile" description="PROFILE NAME" />
                  <TextInput placeholder="Default" description="DESCRIPTION" />
                </SimpleGrid>
                <TextInput placeholder="AKIA..." description="ACCESS KEY" />
                <TextInput placeholder="wJalrXUtnFEMI/K7MDENG..." description="SECRET KEY" type="password" />
                <Divider />

                <Group justify="flex-end">
                  <Button variant="subtle">Create</Button>
                </Group>
              </Stack>
            </Collapse>
          </Paper>

          <Paper withBorder mt="md" mb="xl">
            <Box bg="gray.1" p="md">
              <Group align="center" justify="space-between">
                <Text size="sm" fw={500}>
                  Profile list
                </Text>
                <Popover opened={listToggle} position="bottom-end" radius="md" arrowRadius={10}>
                  <Popover.Target>
                    <ActionIcon variant="subtle" c="black" onClick={onListToggle}>
                      <Icon name="Ellipsis" size={16} strokeWidth={1.5} />
                    </ActionIcon>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Stack>
                      <Button variant="subtle" p={0} m={0} size="xs" onClick={onListToggle}>
                        Set Default
                      </Button>
                      <Button variant="subtle" p={0} m={0} size="xs" c="red.8" onClick={onListToggle}>
                        Delete Keys (3)
                      </Button>
                    </Stack>
                  </Popover.Dropdown>
                </Popover>
              </Group>
            </Box>

            {profiles.map((profile) => (
              <Box key={profile.name}>
                <Divider />
                <Group align="center" justify="space-between" h="60px">
                  <Group align="center" justify="flex-start" gap={0}>
                    <Checkbox size="xs" ml="md" />
                    <Stack gap={5}>
                      <Text size="sm" fw={500} ml="md">
                        {profile.name}
                      </Text>
                      <Text size="xs" fw={300} ml="md">
                        {profile.description}
                      </Text>
                    </Stack>
                  </Group>
                  <Group justify="flex-end">
                    {profile.isDefault && (
                      <Badge variant="outline" size="sm">
                        Default
                      </Badge>
                    )}
                    <CloseButton iconSize={16} mr="md" c={'red.9'} />
                  </Group>
                </Group>
              </Box>
            ))}
          </Paper>
        </Stack>
      </ScrollArea.Autosize>
    </Container>
  )
}
