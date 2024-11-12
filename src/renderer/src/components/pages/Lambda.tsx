import { useState } from 'react'
import { useForm } from '@mantine/form'
import { Stack, Button, Switch } from '@mantine/core'

import { FormRow } from '@atoms/FormRow'
import { FormSegmentedControl } from '@molecules/FormSegmentedControl'
import { SourceDownloadTemplate } from '@templates/SourceDownloadTemplate'

import { ProjectConstant } from '@renderer/constant'

export function Lambda() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const form = useForm({
    initialValues: {
      version: 'v2',
      installPackages: false,
      installType: 'all',
      selectedRepos: [] as string[],
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
      <Stack gap="md">
        <FormRow label="Version">
          <FormSegmentedControl
            data={[
              { label: 'v1', value: 'v1' },
              { label: 'v2', value: 'v2' },
            ]}
            {...form.getInputProps('version')}
          />
        </FormRow>

        <FormRow label="Include Packages">
          <Switch
            size="lg"
            color="themeColor.6"
            onLabel="Yes"
            offLabel="No"
            {...form.getInputProps('installPackages', { type: 'checkbox' })}
          />
        </FormRow>

        <FormRow label="Installation Type">
          <FormSegmentedControl
            data={[
              { label: 'All', value: 'all' },
              { label: 'Selected', value: 'selected' },
            ]}
            {...form.getInputProps('installType')}
            onChange={(value) => {
              form.setFieldValue('installType', value)
              form.setFieldValue('selectedRepos', [])
            }}
          />
        </FormRow>

        {form.values.installType === 'selected' && (
          <FormRow label="Target">
            <Button size="xs" variant="light" color="themeColor.6" onClick={() => setDrawerOpened(true)}>
              {form.values.selectedRepos.length} selected
            </Button>
          </FormRow>
        )}
      </Stack>
    </SourceDownloadTemplate>
  )
}
