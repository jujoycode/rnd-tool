import { Center, SegmentedControl, Text } from '@mantine/core'
import Icon from '@atom/Icon'
import type { SegmentButtonProps } from '@interfaces/atom'

export default function SegmentButton({ data, value, onChange }: SegmentButtonProps) {
  return (
    <SegmentedControl
      data={data.map((item) => ({
        value: item.value,
        label: (
          <Center style={{ gap: 10 }}>
            <Icon name={item.icon} size={20} strokeWidth={1.5} />
            {item.label ? (
              <Text fw={300} size="sm">
                {item.label}
              </Text>
            ) : null}
          </Center>
        )
      }))}
      value={value}
      onChange={onChange}
    />
  )
}
