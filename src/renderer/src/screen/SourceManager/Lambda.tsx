import { Stack, Text, Switch, SegmentedControl, Group, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'

import SourceForm from '@renderer/components/SourceForm'

import { RepositoryModal } from '@renderer/screen/SourceManager/RepositoryModal'
import { LogViewer } from '@renderer/screen/SourceManager/LogViwer'

import { ProjectConstant } from '@renderer/constant'

import type { EventLog, LambdaWorkModalProps } from '@renderer/interface'
import { ProjectUtil } from '@renderer/util'

const SEGMENTED_CONTROL_PROPS = {
  w: 150,
  size: 'xs' as const,
  radius: 'md' as const,
}

const FormRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <Group justify="space-between" align="center">
    <Text size="xs" c="primary">
      {label}:
    </Text>
    {children}
  </Group>
)

export function Lambda() {
  const [drawerOpened, setDrawerOpened] = useState(false)

  const form = useForm({
    initialValues: {
      version: 'v2',
      installPackages: false,
      installType: 'all',
      selectedRepos: [],
    },
  })

  const handleSubmit = () => {}

  const handleClear = () => {
    form.reset()
  }

  return (
    <>
      <SourceForm
        title="Lambda"
        onSubmit={handleSubmit}
        onClear={handleClear}
        modalCondition={form.values.installType === 'all' || form.values.selectedRepos.length > 0}
        modalContent={<LambdaWorkModal formData={form.values} />}
      >
        <Stack gap="md">
          <FormRow label="Version">
            <SegmentedControl
              {...SEGMENTED_CONTROL_PROPS}
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
            <SegmentedControl
              {...SEGMENTED_CONTROL_PROPS}
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
      </SourceForm>

      <RepositoryModal
        opened={drawerOpened}
        repositories={ProjectConstant.LAMBDA_INFO}
        selectedRepos={form.values.selectedRepos}
        onClose={() => setDrawerOpened(false)}
        onSelectionChange={(selected) => form.setFieldValue('selectedRepos', selected as never[])}
      />
    </>
  )
}

function LambdaWorkModal(props: LambdaWorkModalProps) {
  const [step, setStep] = useState(1)

  const [progress, setProgress] = useState(0)
  const [logs, setLogs] = useState<EventLog[]>([])

  const putLog = (logMessage: string) => {
    setLogs((prev) => [
      ...prev,
      {
        id: ProjectUtil.getUUID(),
        message: logMessage,
        timestamp: ProjectUtil.getCurrentTime(),
      },
    ])
  }

  // 1. 대상 저장소 조회
  const getTargetRepositories = () => {
    putLog('Target repositories are being retrieved...')

    setProgress(10)
    setStep(2)
  }

  // 2. 사전 작업
  const preProcess = () => {
    putLog('Pre-processing...')
    setProgress(30)
    setStep(3)
  }

  // 3. 저장소 복제 및 패키지 설치
  const cloneAndInstall = () => {
    putLog('Cloning repositories and installing packages...')
    setProgress(60)
    setStep(4)
  }

  // 4. 후처리
  const postProcess = () => {
    putLog('Post-processing...')
    setProgress(100)
  }

  useEffect(() => {
    switch (step) {
      case 1:
        getTargetRepositories()
        break
      case 2:
        preProcess()
        break
      case 3:
        cloneAndInstall()
        break
      case 4:
        postProcess()
        break
    }
  }, [step])

  return <LogViewer progress={progress} eventLogs={logs} />
}
