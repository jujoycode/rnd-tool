import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import toolTheme from './theme'
import toolRouter from './hooks/router'

export default function App(): JSX.Element {
  return (
    <MantineProvider theme={toolTheme}>
      <RouterProvider
        router={toolRouter}
        future={{
          v7_startTransition: true
        }}
      />
    </MantineProvider>
  )
}
