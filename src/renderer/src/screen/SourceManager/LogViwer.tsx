import { Box, Paper, Group, Text, Progress, UnstyledButton, Collapse, Code, ScrollArea } from '@mantine/core'
import { useState } from 'react'
import { Icon } from '@renderer/components/Icon'

import type { LogViewerProps } from '@renderer/interface'

export function LogViewer(props: LogViewerProps) {
  const [opened, setOpened] = useState(true)

  return (
    <Box>
      <Paper withBorder p="md" mb="md">
        <Group justify="space-between" mb={4}>
          <Text size="xs" c="primary">
            Process
          </Text>
          <Text size="xs" c="primary">
            {props.progress}%
          </Text>
        </Group>
        <Progress value={props.progress} animated size="md" color="themeColor.6" />
      </Paper>

      <Paper withBorder>
        <UnstyledButton onClick={() => setOpened((o) => !o)} w="100%">
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

        <Collapse in={opened}>
          <Code block bg="dark.6" style={{ fontFamily: 'Monaco, monospace' }}>
            <ScrollArea h={300} p="xs">
              {props.eventLogs.map((log) => (
                <Box key={log.id} mb={4}>
                  <Text size="xs" span c="gray.5" mr="xs" style={{ userSelect: 'none' }}>
                    [{log.timestamp}]
                  </Text>
                  <Text size="xs" span c="gray.0" style={{ fontWeight: 500 }}>
                    {log.message}
                  </Text>
                </Box>
              ))}
            </ScrollArea>
          </Code>
        </Collapse>
      </Paper>
    </Box>
  )
}
