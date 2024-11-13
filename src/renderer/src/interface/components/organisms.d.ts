import type { LambdaDownloadFormData } from "./molecules"

export declare namespace Organisms {
  interface LogViewerProps {
    progress: number
    eventLogs: EventLog[]
  }

  interface NavbarProps {
    activeMenu: number
    setActiveMenu?: (menuIndex: number) => void
  }

  interface OperationSelectorProps {
    onSelect: (value: OperationType) => void
  }

  interface RepositoryModalProps {
    opened: boolean
    repositories: Repository[]
    selectedRepos: string[]
    onClose?: () => void
    onSelectionChange?: (selected: string[]) => void
  }

  interface SourceFormProps {
    title: string
    onClear?: () => void
    onSubmit?: () => void
    children?: React.ReactNode
    modalCondition?: boolean
    modalContent?: React.ReactNode
  }

  type WorkModalProps = LambdaDownloadFormData
}
