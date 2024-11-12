import { SourceForm } from '@organisms/SourceForm'
import { RepositoryModal } from '@organisms/RepositoryModal'
import { WorkModal } from '@organisms/WorkModal'

interface SourceDownloadTemplateProps {
  form: any // TODO: Define proper type
  drawerOpened: boolean
  onDrawerOpen: () => void
  onDrawerClose: () => void
  onSubmit: () => void
  onClear: () => void
  repositories: any[] // TODO: Define proper type
  children: React.ReactNode
}

export function SourceDownloadTemplate(props: SourceDownloadTemplateProps) {
  return (
    <>
      <SourceForm
        title="Lambda"
        onSubmit={props.onSubmit}
        onClear={props.onClear}
        modalCondition={props.form.values.installType === 'all' || props.form.values.selectedRepos.length > 0}
        modalContent={<WorkModal formData={props.form.values} />}
      >
        {props.children}
      </SourceForm>

      <RepositoryModal
        opened={props.drawerOpened}
        repositories={props.repositories}
        selectedRepos={props.form.values.selectedRepos}
        onClose={props.onDrawerClose}
        onSelectionChange={(selected) => props.form.setFieldValue('selectedRepos', selected)}
      />
    </>
  )
}
