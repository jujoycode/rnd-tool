import { SegmentedControl, type SegmentedControlProps } from '@mantine/core'

export function FormSegmentedControl(props: SegmentedControlProps) {
  return (
    <SegmentedControl
      w={150}
      size="xs"
      radius="md"
      {...props}
      onChange={(value) => {
        props.onChange?.(value)
      }}
    />
  )
}
