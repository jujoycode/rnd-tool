import { useState } from 'react'
import { useForm } from '@mantine/form'

import { SourceDownloadTemplate } from '@templates/SourceDownloadTemplate'

import { ProjectConstant } from '@renderer/constant'
import { LambdaForm } from '../molecules/LambdaForm'

interface FormValues {
  version: string
  installPackages: boolean
  installType: string
  selectedRepos: string[]
}

export function Lambda() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const form = useForm<FormValues>({
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
      onDrawerOpen={() => setDrawerOpened(true)}
      onDrawerClose={() => setDrawerOpened(false)}
      onSubmit={handleSubmit}
      onClear={handleClear}
      repositories={ProjectConstant.LAMBDA_INFO}
    >
      <LambdaForm form={form} onOpenDrawer={() => setDrawerOpened(true)} />
    </SourceDownloadTemplate>
  )
}
