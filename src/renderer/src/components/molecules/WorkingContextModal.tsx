import { Modal } from '@mantine/core'

interface WorkingContextModalProps {
  opened: boolean
  onClose: () => void
  children: React.ReactNode
}

export function WorkingContextModal({ opened, onClose, children }: WorkingContextModalProps) {
  return (
    <Modal title="Working Context" size="lg" centered opened={opened} onClose={onClose} closeOnClickOutside={false}>
      {children}
    </Modal>
  )
}
