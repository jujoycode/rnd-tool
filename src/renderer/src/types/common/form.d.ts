import type { UseFormReturnType } from '@mantine/form'

interface BaseFormProps<T> {
  form: UseFormReturnType<T>
}

export type { BaseFormProps }