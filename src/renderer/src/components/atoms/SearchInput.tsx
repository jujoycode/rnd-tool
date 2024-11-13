import { TextInput } from '@mantine/core'
import { Icon } from '@atoms/Icon'

import type { SearchInputProps } from '@renderer/types'

export function SearchInput({ value, onChange, ...props }: SearchInputProps) {
  return (
    <TextInput
      placeholder="Search..."
      leftSection={<Icon name="Search" size={16} />}
      value={value}
      onChange={(e) => onChange?.(e.currentTarget.value)}
      size="xs"
      {...props}
    />
  )
}
