import { useEffect } from 'react'
import { useOs } from '@mantine/hooks'
import type { BackKeyHookProps } from '@renderer/types'

export const useBackKey = ({ onBack, isEnabled = true }: BackKeyHookProps) => {
  const os = useOs()

  useEffect(() => {
    if (!isEnabled) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const modifierKey = os === 'macos' ? e.metaKey : e.ctrlKey

      if (modifierKey && e.key === 'Backspace') {
        onBack()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onBack, isEnabled, os])
}