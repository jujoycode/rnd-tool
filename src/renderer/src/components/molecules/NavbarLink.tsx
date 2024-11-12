import NavbarLinkClass from '@renderer/style/Navbar.module.css'

import { Tooltip, UnstyledButton } from '@mantine/core'

import type { NavbarLinkProps } from '@renderer/interface'

export function NavbarLink({ icon, label, active, onClick }: NavbarLinkProps): JSX.Element {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} style={{ fontSize: '10px' }}>
      <UnstyledButton onClick={onClick} className={NavbarLinkClass.link} data-active={active || undefined}>
        {icon}
      </UnstyledButton>
    </Tooltip>
  )
}