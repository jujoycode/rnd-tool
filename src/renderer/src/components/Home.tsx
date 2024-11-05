import homeClass from "../style/Home.module.css"

import { useEffect, useState } from "react"

import { Navbar } from "./Navbar"
import { ErrorPage } from "./Errorr"

export function Home(): JSX.Element {
  const [mainComponent, setMainComponent] = useState(<></>)
  const [activeMenu, setActiveMenu] = useState(999)

  function getMainComponent(menuNumber?: number) {
    switch (menuNumber) {
      case 1:
        break

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
    <div className={homeClass.Home}>
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="main">{mainComponent}</div>
    </div>
  )
}
