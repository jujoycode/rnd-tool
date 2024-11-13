import FloatingLabelClass from '@renderer/style/FloatingLabelInput.module.css'

import { useState } from 'react'

import { TextInput } from '@mantine/core'

import type { FloatingLabelInputProps } from '@renderer/types'

export function FloatingLabelInput({ value, placeholder, ...props }: FloatingLabelInputProps) {
  const [focused, setFocused] = useState(false)
  const floating = (value?.trim().length ?? 0) !== 0 || focused || undefined

  return (
    <TextInput
      placeholder={placeholder}
      required
      classNames={FloatingLabelClass}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
      autoComplete="nope"
      data-floating={floating}
      labelProps={{ 'data-floating': floating }}
      {...props}
    />
  )
}
