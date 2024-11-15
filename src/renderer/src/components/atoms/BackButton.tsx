import { Button } from '@mantine/core'
import { Icon } from '@atoms/Icon'

import type { BackButtonProps } from '@renderer/types'

export function BackButton({ onBack }: BackButtonProps) {
  return (
    <Button
      variant="subtle"
      color="rgba(180, 180, 180, 1)"
      size="sm"
      leftSection={<Icon name="ArrowLeft" size={16} />}
      onClick={() => onBack?.()}
    >
      Back
    </Button>
  )
}
