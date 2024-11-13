import { Icon } from '@atoms/Icon'

import type { IconProps } from '@renderer/types'

export function NavbarIcon({ name }: { name: IconProps['name'] }) {
  return <Icon name={name} size={18} strokeWidth={1} />
}
