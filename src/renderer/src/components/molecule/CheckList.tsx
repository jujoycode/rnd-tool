import { Checkbox, ScrollArea, Stack } from '@mantine/core'
import type { CheckListProps } from '@interfaces/molecule'

export default function CheckList({ label, description, required = false, items, size }: CheckListProps): JSX.Element {
  return (
    <Checkbox.Group label={label} description={description} required={required}>
      <ScrollArea scrollHideDelay={500} h={size?.height ? size?.height : 200} w={size?.width ? size?.width : '100%'}>
        <Stack mt="sm">
          {items.map((item) => (
            <Checkbox radius="sm" key={item} label={item} value={item} />
          ))}
        </Stack>
      </ScrollArea>
    </Checkbox.Group>
  )
}
