import { useState } from 'react'
import { useForm } from '@mantine/form'

import { SourceDownloadTemplate } from '@templates/SourceDownloadTemplate'

import { ProjectConstant } from '@renderer/constant'

import { LambdaDownloadForm } from '@molecules/LambdaDownloadForm'
import type { LambdaDownloadFormData } from '@renderer/types'

export function Lambda() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const form = useForm<LambdaDownloadFormData>({
    initialValues: {
      version: 'v2',
      installPackages: false,
      installType: 'all',
      selectedRepos: [],
    },
  })

  const handleSubmit = () => {}
  const handleClear = () => form.reset()

  return (
    <SourceDownloadTemplate
      form={form}
      drawerOpened={drawerOpened}
      onDrawerClose={() => setDrawerOpened(false)}
      onSubmit={handleSubmit}
      onClear={handleClear}
      repositories={ProjectConstant.LAMBDA_INFO}
    >
      <LambdaDownloadForm form={form} onOpenDrawer={() => setDrawerOpened(true)} />
    </SourceDownloadTemplate>
  )
}
