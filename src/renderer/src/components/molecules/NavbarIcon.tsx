import { Icon, type IconProps } from '@atoms/Icon'

export function NavbarIcon({ name }: { name: IconProps['name'] }) {
  return <Icon name={name} size={18} strokeWidth={1} />
}
