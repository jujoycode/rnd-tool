import SourceFormClass from '@renderer/style/SourceForm.module.css'

import { Button, Card, Container, Group, Title, Modal, Text } from '@mantine/core'
import { useState } from 'react'

import { FloatingLabelInput } from '@renderer/components/FloatingLabelInput'
import { Icon } from '@renderer/components/Icon'

import type { SourceFormProps } from '@renderer/interface'

export default function SourceForm(props: SourceFormProps) {
  const [path, setPath] = useState('')
  const [opened, setOpened] = useState(false)

  const PathSearchButton = (
    <Icon
      className={SourceFormClass.button}
      name="Search"
      size={16}
      onClick={() => {
        window.electron.ipcRenderer.send('getTargetPath')
        window.electron.ipcRenderer.once('getTargetPath', (_, args) => {
          if (args?.canceled) {
            return
          }

          setPath(args?.filePaths[0])
        })
      }}
    />
  )

  const handleClear = () => {
    setPath('')
    props.onClear()
  }

  const handleSubmit = () => {
    props.onSubmit?.()

    if (props.modalCondition) {
      setOpened(true)
    }
  }

  return (
    <>
      <Modal
        title="Working Context"
        size="lg"
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnClickOutside={false}
      >
        {props.modalContent}
      </Modal>

      <Container fluid className={SourceFormClass.container}>
        <Card shadow="sm" radius="md" withBorder>
          <Card.Section withBorder inheritPadding py="md">
            <Group justify="space-between">
              <Group>
                <Title order={4}>{props.title}</Title>
                <Text c="dimmed" size="sm">
                  Source Manager
                </Text>
              </Group>
              <Button variant="subtle" color="gray" size="sm" onClick={handleClear}>
                Clear
              </Button>
            </Group>
          </Card.Section>

          <Card.Section p="lg">
            <FloatingLabelInput
              label="Root Path"
              placeholder="Enter root path"
              value={path}
              onChange={(event) => setPath(event.currentTarget.value)}
              rightSection={PathSearchButton}
            />

            {props.children}

            <Button
              fullWidth
              className={SourceFormClass.startButton}
              mt="lg"
              size="sm"
              radius="md"
              color="themeColor.8"
              onClick={handleSubmit}
              disabled={path === '' || !props.modalCondition}
            >
              Start
            </Button>
          </Card.Section>
        </Card>
      </Container>
    </>
  )
}
