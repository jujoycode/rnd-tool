import HomeClass from '@renderer/style/Home.module.css'

import { useGlobalStore } from '@stores/globalStore'
import { SourceManagePage } from '@pages/SourceManagePage'
import { ErrorPage } from '@pages/ErrorrPage'
import { Navbar } from '@organisms/Navbar'
import { BoxButton } from '@atoms/BoxButton'

export function Home(): JSX.Element {
  const { menuIndex } = useGlobalStore()

  const menuComponents = {
    0: HomePage,
    3: SourceManagePage,
    default: ErrorPage,
  }

  const MainComponent = menuComponents[menuIndex] || menuComponents.default

  return (
    <div className={HomeClass.Home}>
      <Navbar />
      <div className="main">
        <MainComponent />
      </div>
    </div>
  )
}

function HomePage(): JSX.Element {
  return (
    <>
      <BoxButton />
    </>
  )
}
