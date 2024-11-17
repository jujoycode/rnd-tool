import type { BaseProps } from '../common/base'
import type { icons, LucideProps } from 'lucide-react'
import type { TextInputProps } from '@mantine/core'

interface ActionItem {
  title: string
  value: string
  icon: IconProps['name']
  disabled?: boolean
}

interface BoxButton {
  title: string
  value: string
  iconName: IconProps['name']
}

interface BackButtonProps {
  onBack?: () => void
}

interface ActionButtonProps {
  item: ActionItem
  isSelected: boolean
  onItemClick?: (value: string) => void
}

interface FloatingLabelInputProps extends TextInputProps {
  label: string
  value?: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface FormRowProps {
  label: string
  children: React.ReactNode
}

interface IconProps extends LucideProps {
  name: keyof typeof icons
  isCursor?: boolean
}

interface LoaderProps {
  title: string
  setIsLoading: (isLoading: boolean) => void
}

interface LogItemProps {
  log: EventLog
}

interface SearchInputProps {
  value: string
  onChange?: (value: string) => void
}

export type {
  ActionItem,
  BoxButton,
  ActionButtonProps,
  BackButtonProps,
  FloatingLabelInputProps,
  FormRowProps,
  IconProps,
  LoaderProps,
  LogItemProps,
  SearchInputProps,
}
