import type { icons, LucideProps } from 'lucide-react'

export declare namespace Atoms {
  interface ActionButtonProps {
    item: ActionItem
    isSelected: boolean
    onItemClick?: (value: string) => void
  }

  interface FloatingLabelInputProps extends CommonBase.BaseProps {
    label: string;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  interface FormRowProps {
    label: string
    children: React.ReactNode
  }

  interface IconProps extends LucideProps {
    name: keyof typeof icons
  }

  interface LoaderProps {
    title: string;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
  }

  interface LogItemProps {
    log: EventLog
  }

  interface SearchInputProps {
    value: string
    onChange?: (value: string) => void
  }
}
