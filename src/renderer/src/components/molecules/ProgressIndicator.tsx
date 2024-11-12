import { Group, Text, Progress, Paper } from '@mantine/core'

interface ProgressIndicatorProps {
  progress: number
}

export function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  return (
    <Paper withBorder p="md" mb="md">
      <Group justify="space-between" mb={4}>
        <Text size="xs" c="primary">
          Process
        </Text>
        <Text size="xs" c="primary">
          {progress}%
        </Text>
      </Group>
      <Progress value={progress} animated size="md" color="themeColor.6" />
    </Paper>
  )
}