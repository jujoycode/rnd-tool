import { Box, Text } from '@mantine/core'

import type { EventLog } from '@renderer/interface'

interface LogItemProps {
  log: EventLog
}

export function LogItem({ log }: LogItemProps) {
  return (
    <Box mb={4}>
      <Text size="xs" span c="gray.5" mr="xs" style={{ userSelect: 'none' }}>
        [{log.timestamp}]
      </Text>
      <Text size="xs" span c="gray.0" style={{ fontWeight: 500 }}>
        {log.message}
      </Text>
    </Box>
  )
}