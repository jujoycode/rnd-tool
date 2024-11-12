import { TextInput } from '@mantine/core'
import { Icon } from '@atoms/Icon'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange, ...props }: SearchInputProps) {
  return (
    <TextInput
      placeholder="Search..."
      leftSection={<Icon name="Search" size={16} />}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      size="xs"
      {...props}
    />
  )
}
