import type { BaseFormProps } from "../common/form"

export declare namespace Molecules {
  interface ActionGridProps {
    title: string
    description?: string
    ActionItems: ActionItem[]
    ItemGrid?: number
    onItemClick?: (itemValue: string) => void
  }

  type LambdaDownloadFormData = {
    version: string
    installPackages: boolean
    installType: string
    selectedRepos: string[]
  }
  interface LambdaDownloadFormProps extends BaseFormProps<LambdaDownloadFormData> {
    onOpenDrawer: () => void
  }

  interface LogHeaderProps {
    opened: boolean
    onToggle: () => void
  }

  interface NavbarLinkProps {
    icon: JSX.Element
    label: string
    active?: boolean
    onClick?(): void
  }

  interface ProgressIndicatorProps {
    progress: number
  }

  interface RepositoryItemProps {
    repo: Repository
    isSelected: boolean
    onSelect: (checked: boolean) => void
  }

  interface SourceFormHeaderProps {
    title: string
    onClear?: () => void
  }
  interface SourceFormContentProps {
    title: string
    path: string
    children: React.ReactNode
    isSubmitDisabled: boolean
    onPathChange?: (value: string) => void
    onClear?: () => void
    onSubmit?: () => void
  }

  interface WorkingContextModalProps {
    opened: boolean
    children: React.ReactNode
    onClose?: () => void
  }
}
