import type { ActionItem } from "@renderer/interface"

export class ProjectConstant {
  static SOURCE_CATEGORY = [
    {
      title: "Lambda",
      icon: "SquareFunction",
    },
    {
      title: "ECS",
      icon: "Boxes",
    },
    {
      title: "Framework",
      icon: "LibraryBig",
    },
    {
      title: "Application",
      icon: "AppWindowMac",
    },
    {
      title: "Studio",
      icon: "WandSparkles",
    },
  ] as ActionItem[]
}
