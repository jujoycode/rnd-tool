import ActionGridClass from '@renderer/style/ActionGrid.module.css'

import { Stack, Text } from '@mantine/core'

interface ActionGridHeaderProps {
  title: string
  description?: string
}

export const ActionGridHeader = ({ title, description }: ActionGridHeaderProps) => (
  <Stack mb={10} gap={4}>
    <Text size="lg" fw={600} className={ActionGridClass.title}>
      {title}
    </Text>
    {description && (
      <Text size="xs" fw={300} c="themeColor.3">
        {description}
      </Text>
    )}
  </Stack>
)
