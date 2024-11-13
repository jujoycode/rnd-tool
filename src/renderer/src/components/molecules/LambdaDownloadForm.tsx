import { Stack, Switch, SegmentedControl, Button } from '@mantine/core'
import { FormRow } from '@atoms/FormRow'

import { ProjectConstant } from '@renderer/constant'
import { LambdaDownloadFormProps } from '@renderer/types'

const SEGMENTED_CONTROL_PROPS = {
  w: 150,
  size: 'xs' as const,
  radius: 'md' as const,
}

export function LambdaDownloadForm({ form, onOpenDrawer }: LambdaDownloadFormProps) {
  return (
    <Stack gap="md">
      <FormRow label="Version">
        <SegmentedControl
          {...SEGMENTED_CONTROL_PROPS}
          data={ProjectConstant.LAMBDA_DOWNLOAD_FORM.VERSION}
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
        <SegmentedControl
          {...SEGMENTED_CONTROL_PROPS}
          data={ProjectConstant.LAMBDA_DOWNLOAD_FORM.INSTALLATION_TYPE}
          {...form.getInputProps('installType')}
          onChange={(value) => {
            form.setFieldValue('installType', value)
            form.setFieldValue(
              'selectedRepos',
              value === 'all' ? ProjectConstant.LAMBDA_INFO.map((repo) => repo.value) : [],
            )
          }}
        />
      </FormRow>

      {form.values.installType === 'selected' && (
        <FormRow label="Target">
          <Button size="xs" variant="light" color="themeColor.6" onClick={onOpenDrawer}>
            {form.values.selectedRepos.length} selected
          </Button>
        </FormRow>
      )}
    </Stack>
  )
}
