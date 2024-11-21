import { icons } from 'lucide-react'
import type { IconProps } from '@interfaces/atom'

export default function Icon({ name, ...props }: IconProps): JSX.Element {
  const LucideIcon = icons[name]

  return <LucideIcon {...props} />
}
