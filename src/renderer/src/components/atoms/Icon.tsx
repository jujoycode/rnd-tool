import { icons } from 'lucide-react'

import type { IconProps } from '@renderer/types'

export const Icon = ({ name, isCursor = true, ...props }: IconProps) => {
  const LucideIcon = icons[name]

  return <LucideIcon style={{ cursor: isCursor ? 'pointer' : 'unset' }} {...props} />
}
