import type { icons, LucideProps } from 'lucide-react'

type IconName = keyof typeof icons

interface IconProps extends LucideProps {
  name: IconName
}

interface NavItemProps {
  index: number
  label: string
  isActive: boolean
  iconName: IconName
  path: string
  onItemClick: (index: number) => void
}

export type { IconProps, NavItemProps }
