import { SourceForm } from '@organisms/SourceForm'
import { RepositoryModal } from '@organisms/RepositoryModal'
import { WorkModal } from '@organisms/WorkModal'

import type { SourceDownloadTemplateProps } from '@renderer/types'

export function SourceDownloadTemplate({
  form,
  drawerOpened,
  onDrawerClose,
  onSubmit,
  onClear,
  repositories,
  children,
}: SourceDownloadTemplateProps) {
  return (
    <>
      <SourceForm
        title="Lambda"
        onSubmit={onSubmit}
        onClear={onClear}
        modalCondition={form.values.installType === 'all' || form.values.selectedRepos.length > 0}
        modalContent={<WorkModal formData={form.values} />}
      >
        {children}
      </SourceForm>

      <RepositoryModal
        opened={drawerOpened}
        repositories={repositories}
        selectedRepos={form.values.selectedRepos}
        onClose={onDrawerClose}
        onSelectionChange={(selected) => form.setFieldValue('selectedRepos', selected)}
      />
    </>
  )
}
