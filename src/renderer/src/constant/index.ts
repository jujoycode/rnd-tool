import type { ActionItem } from "@renderer/interface"

export class ProjectConstant {
  static SOURCE_CATEGORY = [
    {
      title: "Lambda",
      value: 'lambda',
      icon: "SquareFunction",
    },
    {
      title: "ECS",
      value: 'ecs',
      icon: "Boxes",
    },
    {
      title: "Framework",
      value: 'framework',
      icon: "LibraryBig",
    },
    {
      title: "Application",
      value: 'application',
      icon: "AppWindowMac",
    },
    {
      title: "Studio",
      value: 'studio',
      icon: "WandSparkles",
    },
  ] as ActionItem[]

  static OPERATION_CATEGORY = [
    {
      title: "Download",
      value: 'download',
      icon: "HardDriveDownload",
    },
    {
      title: "Update",
      value: 'update',
      icon: "FolderSync",
    },
  ] as ActionItem[]

  static LAMBDA_INFO = [
    { value: 'CalsComWebCommonSelectData', label: 'CalsComWebCommonSelectData', description: '/ComCommonSelect' },
    { value: 'CalsComWebCommonSaveData', label: 'CalsComWebCommonSaveData', description: '/ComCommonSave' },
    { value: 'CalsComWebCommonDeleteData', label: 'CalsComWebCommonDeleteData', description: '/ComCommonSave' },
  ]
}
