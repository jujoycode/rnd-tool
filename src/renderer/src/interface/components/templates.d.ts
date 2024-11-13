import { RepositoryItemProps } from "./molecules"

export declare namespace Templates {
  interface SourceDownloadTemplateProps {
    form: any // TODO: Define proper type
    drawerOpened: boolean
    onDrawerOpen: () => void
    onDrawerClose: () => void
    onSubmit: () => void
    onClear: () => void
    repositories: RepositoryItemProps[] // TODO: Define proper type
    children: React.ReactNode
  }
}
