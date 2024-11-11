import { IconProps } from "@renderer/components/Icon";

export interface NavbarProps {
  activeMenu: number;
  setActiveMenu: (menuIndex: number) => void
}

export interface NavbarLinkProps {
  icon: JSX.Element
  label: string
  active?: boolean
  onClick?(): void
}

export interface ActionGridProps {
  title: string;
  description?: string;
  ActionItems: ActionItem[];
  ItemGrid?: number
  onItemClick: (itemValue: string) => void;
}

export interface ActionItem {
  title: string;
  value: string;
  icon: IconProps["name"];
  disabled?: boolean
}

export interface LoaderProps {
  title: string;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export type SourceType = "lambda" | "ecs" | "framework" | "application" | "studio"
export type OperationType = "download" | "update"

export interface SourceFormProps {
  title: string
  onClear: () => void
  onSubmit?: () => void
  children?: React.ReactNode
  modalCondition?: boolean
  modalContent?: React.ReactNode
}

export interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  [key: string]: any;
}
export interface RepositoryModalProps {
  opened: boolean
  onClose: () => void
  repositories: Repository[]
  selectedRepos: string[]
  onSelectionChange: (selected: string[]) => void
}

export interface RepositoryListProps {
  repositories: Repository[]
  selectedRepos: string[]
  onSelectionChange: (selected: string[]) => void
}

export interface Repository {
  value: string
  label: string
  description: string
}

export interface LogViewerProps {
  progress: number
  eventLogs: EventLog[]
}

export type EventLog = { id: string; message: string; timestamp: string }

export interface LambdaWorkModalProps {
  formData: {
    version: string
    installPackages: boolean
    installType: string
    selectedRepos: string[]
  }
}