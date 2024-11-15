import SourceFormClass from '@renderer/style/SourceForm.module.css'

import { Button, Card } from '@mantine/core'

import { FloatingLabelInput } from '@atoms/FloatingLabelInput'
import { PathSearchButton } from '@molecules/PathSearchButton'
import { SourceFormHeader } from '@molecules/SourceFormHeader'
import type { SourceFormContentProps } from '@renderer/types'

export function SourceFormContent({
  title,
  path,
  onPathChange,
  onClear,
  onSubmit,
  isSubmitDisabled,
  children,
}: SourceFormContentProps) {
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="md">
        <SourceFormHeader title={title} onClear={onClear} />
      </Card.Section>

      <Card.Section p="lg">
        <FloatingLabelInput
          label="Root Path"
          placeholder="Enter root path"
          value={path}
          onChange={(event) => onPathChange?.(event.currentTarget.value)}
          rightSection={<PathSearchButton setPath={onPathChange} />}
        />

        {children}

        <Button
          fullWidth
          className={SourceFormClass.startButton}
          mt="lg"
          size="sm"
          radius="md"
          color="themeColor.8"
          onClick={onSubmit}
          disabled={isSubmitDisabled}
        >
          Start
        </Button>
      </Card.Section>
    </Card>
  )
}
