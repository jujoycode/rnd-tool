import { Modal } from '@mantine/core'
import type { PopupProps } from '@interfaces/molecule'

export default function Popup({ title, content, opened, onClose }: PopupProps) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        title={title}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3
        }}
      >
        {content}
      </Modal>
    </>
  )
}
