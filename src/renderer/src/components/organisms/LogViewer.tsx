import { Box, Paper, Collapse, Code, ScrollArea } from '@mantine/core'
import { useState } from 'react'

import { LogItem } from '@atoms/LogItem'
import { LogHeader } from '@molecules/LogHeader'
import { ProgressIndicator } from '@molecules/ProgressIndicator'

import type { LogViewerProps } from '@renderer/types'

export function LogViewer(props: LogViewerProps) {
  const [opened, setOpened] = useState(true)

  return (
    <Box>
      <ProgressIndicator progress={props.progress} />

      <Paper withBorder>
        <LogHeader opened={opened} onToggle={() => setOpened((o) => !o)} />

        <Collapse in={opened}>
          <Code block bg="dark.6" style={{ fontFamily: 'Monaco, monospace' }}>
            <ScrollArea h={300} p="xs">
              {props.eventLogs.map((log) => (
                <LogItem key={log.id} log={log} />
              ))}
            </ScrollArea>
          </Code>
        </Collapse>
      </Paper>
    </Box>
  )
}
