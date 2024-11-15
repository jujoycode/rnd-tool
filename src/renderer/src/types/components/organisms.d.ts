import type { EventLog } from "../features/source"
import type { OperationType } from "../features/source"
import type { Repository } from "../features/repository"

interface LogViewerProps {
  progress: number
  eventLogs: EventLog[]
}

interface OperationSelectorProps {
  onSelect: (value: OperationType) => void
}

interface RepositoryModalProps {
  opened: boolean
  repositories: Repository[]
  selectedRepos: string[]
  onClose: () => void
  onSelectionChange: (selected: string[]) => void
}

interface SourceFormProps {
  title: string
  onClear?: () => void
  onSubmit?: () => void
  children?: React.ReactNode
  modalCondition?: boolean
  modalContent?: React.ReactNode
}

interface WorkModalProps {
  formData: any
}


export type { LogViewerProps, NavbarProps, OperationSelectorProps, RepositoryModalProps, SourceFormProps, WorkModalProps }