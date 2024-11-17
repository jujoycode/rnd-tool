import HomeClass from '@renderer/style/Home.module.css'

import { useGlobalStore } from '@stores/globalStore'

import { Stack } from '@mantine/core'

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
      <Stack>
        <BoxButton title="등록된 일정" value="1건" iconName="Calendar" />
        <BoxButton title="미해결 이슈" value="3건" iconName="Bug" />
      </Stack>
    </>
  )
}
