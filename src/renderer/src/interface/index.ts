import { MantineColor } from "@mantine/core";
import { IconProps } from "@renderer/components/Icon";

export interface NavbarProps {
  activeMenu: number;
  setActiveMenu: (menuIndex: number) => void
}

export interface ActionGridProps {
  ActionItems: ActionItem[];
}

export interface ActionItem {
  title: string;
  icon: IconProps["name"];
  color?: MantineColor;
}
