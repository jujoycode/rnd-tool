import HomeClass from '../style/Home.module.css'

import { useState } from 'react'

import { Navbar } from '@renderer/components/Navbar'

import { ErrorPage } from '@renderer/screen/ErrorrPage'
import { SourceManager } from '@renderer/screen/SourceManager/index'

export function Home(): JSX.Element {
  const [activeMenu, setActiveMenu] = useState(999)

  const menuComponents = {
    3: SourceManager,
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
