import { SegmentedControl, type SegmentedControlProps } from '@mantine/core'

export function FormSegmentedControl({ onChange, ...props }: SegmentedControlProps) {
  return (
    <SegmentedControl
      w={150}
      size="xs"
      radius="md"
      {...props}
      onChange={(value) => {
        onChange?.(value)
      }}
    />
  )
}
