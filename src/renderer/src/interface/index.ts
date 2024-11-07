import { MantineColor } from "@mantine/core";
import { IconProps } from "@renderer/components/Icon";

export interface NavbarProps {
  activeMenu: number;
  setActiveMenu: (menuIndex: number) => void
}

export interface ActionGridProps {
  title: string;
  ActionItems: ActionItem[];
  ItemGrid?: number
  onItemClick: (itemTitle: string) => void;
}

export interface ActionItem {
  title: string;
  icon: IconProps["name"];
  color?: MantineColor;
}

export interface LoaderProps {
  title: string;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export type SourceType = "Lambda" | "ECS" | 'Framework' | 'Application' | 'Studio'
export type OperationType = 'Download' | 'Update'

export interface SourceFormProps {
  title: string
  onClear: () => void
  onSubmit?: () => void
  children?: React.ReactNode
  modalCondition?: boolean
  modalContent?: React.ReactNode
}

export interface LogViewerProps {
  logs: Array<{ message: string; type: 'info' | 'error' | 'success' }>;
}

export interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  [key: string]: any;
}
