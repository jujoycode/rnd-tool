import { RepositoryItem } from "./molecules"

interface SourceDownloadTemplateProps {
  form: any
  children: React.ReactNode
  repositories: RepositoryItem[]
  drawerOpened: boolean
  onDrawerClose: () => void
  onSubmit: () => void
  onClear: () => void
}


export type { SourceDownloadTemplateProps }