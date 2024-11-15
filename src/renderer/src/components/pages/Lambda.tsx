import { useState } from 'react'
import { useForm } from '@mantine/form'

import { useSourceStore } from '@renderer/hooks/stores/sourceStore'
import { ProjectConstant } from '@renderer/constant'

import { SourceDownloadTemplate } from '@templates/SourceDownloadTemplate'
import { LambdaDownloadForm } from '@molecules/LambdaDownloadForm'

import type { LambdaDownloadFormData } from '@renderer/types'

export function Lambda() {
  const { sourceConfig, updateSourceConfig, setOperation, setSource } = useSourceStore()
  const [drawerOpened, setDrawerOpened] = useState(false)
  const form = useForm<LambdaDownloadFormData>({
    initialValues: sourceConfig.lambda as LambdaDownloadFormData,
  })

  const handleSubmit = () => {
    const values = form.values
    updateSourceConfig('lambda', values)
    setOperation('download')
    setSource('lambda')
  }

  const handleClear = () => {
    form.reset()
    updateSourceConfig('lambda', sourceConfig.lambda)
  }

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
