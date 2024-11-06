import "./style/App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Home } from "@renderer/screen/Home";

import { myTheme } from "./theme";

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')s

  return (
    <MantineProvider theme={myTheme}>
      <Home />
    </MantineProvider>
  );
}

export default App;
