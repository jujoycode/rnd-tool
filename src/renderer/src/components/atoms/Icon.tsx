import { icons } from 'lucide-react'

import type { IconProps } from '@renderer/types'

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name]

  return <LucideIcon style={{ cursor: 'pointer' }} {...props} />
}
