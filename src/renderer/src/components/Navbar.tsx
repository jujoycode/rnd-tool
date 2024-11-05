import { Home, User, CloudUpload, Package, CalendarDays, Hammer, Settings, LogOut } from "lucide-react"
import { Tooltip, UnstyledButton, Stack } from "@mantine/core"

import classes from "../style/Navbar.module.css"

import type { NavbarProps } from "../interface"

interface NavbarLinkProps {
  icon: typeof Home
  label: string
  active?: boolean
  onClick?(): void
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps): JSX.Element {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} style={{ fontSize: "10px" }}>
      <UnstyledButton color="green" onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon size={18} strokeWidth={1} />
      </UnstyledButton>
    </Tooltip>
  )
}

const navigationData = [
  { icon: Home, label: "Home" },
  { icon: CloudUpload, label: "Deploy" },
  { icon: Package, label: "Resource" },
  { icon: CalendarDays, label: "Calendar" },
  { icon: Hammer, label: "Utility" },
  { icon: User, label: "User Pool" },
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
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack className={classes.navbarFooter} justify="center" gap={0}>
        <NavbarLink icon={Settings} label="Settings" />
        <NavbarLink icon={LogOut} label="Logout" />
      </Stack>
    </nav>
  )
}
