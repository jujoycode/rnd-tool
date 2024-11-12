import NavbarClass from '@renderer/style/Navbar.module.css'

import { Stack } from '@mantine/core'
import { NavbarIcon } from '@molecules/NavbarIcon'
import { NavbarLink } from '@molecules/NavbarLink'

import type { NavbarProps } from '@renderer/interface'

const navigationData = [
  { icon: <NavbarIcon name="House" />, label: 'Home' },
  { icon: <NavbarIcon name="CloudUpload" />, label: 'Deploy' },
  { icon: <NavbarIcon name="Package" />, label: 'Resource' },
  { icon: <NavbarIcon name="Gitlab" />, label: 'Source Manager' },
  { icon: <NavbarIcon name="CalendarDays" />, label: 'Calendar' },
  { icon: <NavbarIcon name="TestTubeDiagonal" />, label: 'Test' },
  { icon: <NavbarIcon name="Hammer" />, label: 'Utility' },
  { icon: <NavbarIcon name="User" />, label: 'User Pool' },
]

export function Navbar(props: NavbarProps): JSX.Element {
  const links = navigationData.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === props.activeMenu}
      onClick={() => props.setActiveMenu(index)}
    />
  ))

  return (
    <nav className={NavbarClass.navbar}>
      <div className={NavbarClass.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack className={NavbarClass.navbarFooter} justify="center" gap={0}>
        <NavbarLink icon={<NavbarIcon name="Settings" />} label="Settings" />
        <NavbarLink icon={<NavbarIcon name="LogOut" />} label="Logout" />
      </Stack>
    </nav>
  )
}
