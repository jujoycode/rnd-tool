import { MantineColor } from "@mantine/core";
import { IconProps } from "@renderer/components/Icon";

export interface NavbarProps {
  activeMenu: number;
  setActiveMenu: (menuIndex: number) => void
}

export interface ActionGridProps {
  title: string;
  ActionItems: ActionItem[];
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

export type SourceManagerType = '' | "lambda" | "ecs" | 'framework' | 'application' | 'studio'

export interface SourceFormProps {
  children?: React.ReactNode;
  onSubmit: (data: any) => void;
}

export interface LogViewerProps {
  logs: Array<{ message: string; type: 'info' | 'error' | 'success' }>;
}

export interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}
