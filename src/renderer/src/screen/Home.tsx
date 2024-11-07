import HomeClass from '../style/Home.module.css'

import { useEffect, useState } from 'react'

import { Navbar } from '@renderer/components/Navbar'

import { ErrorPage } from '@renderer/screen/ErrorrPage'
import { SourceManager } from '@renderer/screen/SourceManager/index'

export function Home(): JSX.Element {
  const [mainComponent, setMainComponent] = useState(<></>)
  const [activeMenu, setActiveMenu] = useState(999)

  function getMainComponent(menuNumber?: number) {
    switch (menuNumber) {
      case 3: {
        setMainComponent(<SourceManager />)
        break
      }

      default: {
        setMainComponent(ErrorPage)
        break
      }
    }
  }

  useEffect(() => {
    getMainComponent(activeMenu)
  }, [activeMenu])

  return (
    <div className={HomeClass.Home}>
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="main">{mainComponent}</div>
    </div>
  )
}
