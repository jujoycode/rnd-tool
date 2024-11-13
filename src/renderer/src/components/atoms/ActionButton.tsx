import ActionGridClass from '@renderer/style/ActionGrid.module.css'

import { UnstyledButton, Text } from '@mantine/core'
import { Icon } from '@renderer/components/atoms/Icon'

import type { Atoms } from '@renderer/interface'

export const ActionButton = ({ item, isSelected, onItemClick }: Atoms.ActionButtonProps) => (
  <UnstyledButton
    className={`${ActionGridClass.item} ${isSelected ? ActionGridClass.selected : ''}`}
    onClick={() => onItemClick(item.value)}
    disabled={item.disabled}
  >
    <div className={ActionGridClass.iconWrapper}>
      <Icon name={item.icon} size={32} strokeWidth={1.5} />
    </div>
    <Text size="xs" mt={7} fw={500} className={ActionGridClass.title}>
      {item.title}
    </Text>
  </UnstyledButton>
)
