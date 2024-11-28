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

interface SegmentButtonProps {
  value?: string
  onChange?: (value: string) => void
  data: {
    value: string
    label?: string
    icon: IconName
  }[]
}

interface JsonInputProps {
  value: string
  onChange: (value: string) => void
}

export type { IconName, IconProps, NavItemProps, SegmentButtonProps, JsonInputProps }
