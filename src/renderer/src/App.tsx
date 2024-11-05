import "./style/App.css"
import "@mantine/core/styles.css"

import { MantineProvider } from "@mantine/core"
import { Home } from "./components/Home"

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')s

  return (
    <MantineProvider>
      <Home />
    </MantineProvider>
  )
}

export default App
