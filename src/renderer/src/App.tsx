import '@renderer/style/App.css'
import '@mantine/core/styles.css'

import { useState } from 'react'
import { MantineProvider } from "@mantine/core"

import { Loader } from '@renderer/components/atoms/Loader'
import { Home } from '@renderer/components/pages/Home'

import { myTheme } from './theme'

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <MantineProvider theme={myTheme}>
      {isLoading ? <Loader title="Initializing..." isLoading={isLoading} setIsLoading={setIsLoading} /> : <Home />}
    </MantineProvider>
  )
}

export default App
