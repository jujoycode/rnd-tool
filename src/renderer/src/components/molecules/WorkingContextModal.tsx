import { Modal } from '@mantine/core'

import type { WorkingContextModalProps } from '@renderer/types'

export function WorkingContextModal({ opened, onClose, children }: WorkingContextModalProps) {
  return (
    <Modal title="Working Context" size="lg" centered opened={opened} onClose={onClose} closeOnClickOutside={false}>
      {children}
    </Modal>
  )
}
