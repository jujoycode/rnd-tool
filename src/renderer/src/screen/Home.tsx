import HomeClass from "../style/Home.module.css";

import { useEffect, useState } from "react";

import { Navbar } from "../components/Navbar";

import { ErrorPage } from "./ErrorrPage";
import { Deploy } from "./Deploy";

export function Home(): JSX.Element {
  const [mainComponent, setMainComponent] = useState(<></>);
  const [activeMenu, setActiveMenu] = useState(999);

  function getMainComponent(menuNumber?: number) {
    switch (menuNumber) {
      case 3: {
        setMainComponent(<Deploy />);
        break;
      }

      default: {
        setMainComponent(ErrorPage);
        break;
      }
    }
  }

  useEffect(() => {
    getMainComponent(activeMenu);
  }, [activeMenu]);

  return (
    <div className={HomeClass.Home}>
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="main">{mainComponent}</div>
    </div>
  );
}
