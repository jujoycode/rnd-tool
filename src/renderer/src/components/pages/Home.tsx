import HomeClass from '@renderer/style/Home.module.css'

import { useState } from 'react'

import { Navbar } from '@organisms/Navbar'

import { SourceManagerPage } from '@pages/SourceManagePage'
import { ErrorPage } from '@pages/ErrorrPage'

export function Home(): JSX.Element {
  const [activeMenu, setActiveMenu] = useState(999)

  const menuComponents = {
    3: SourceManagerPage,
    default: ErrorPage,
  }

  const MainComponent = menuComponents[activeMenu] || menuComponents.default

  return (
    <div className={HomeClass.Home}>
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="main">
        <MainComponent />
      </div>
    </div>
  )
}
