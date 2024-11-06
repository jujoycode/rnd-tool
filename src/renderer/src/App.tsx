import "./style/App.css"
import "@mantine/core/styles.css"

import { useState } from "react"
import { MantineProvider } from "@mantine/core"

import { Home } from "@renderer/screen/Home"
import { Loader } from "@renderer/components/Loader"

import { myTheme } from "./theme"

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <MantineProvider theme={myTheme}>
      {isLoading ? <Loader title="Initializing..." isLoading={isLoading} setIsLoading={setIsLoading} /> : <Home />}
    </MantineProvider>
  )
}

export default App
