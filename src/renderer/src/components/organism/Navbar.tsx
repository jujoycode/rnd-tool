import { Divider, Stack } from '@mantine/core'
import { useGlobalStore } from '@hooks/stores/GlobalStore'
import NavbarHeader from '@molecule/NavbarHeader'
import NavbarFooter from '@molecule/NavbarFooter'
import NavItem from '@atom/NavItem'
import type { NavItemProps } from '@interfaces/atom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar(): JSX.Element {
  const navigate = useNavigate()
  const { username, usermail, navIndex, setNavIndex } = useGlobalStore()

  const navItems = [
    { label: 'Home', iconName: 'House', path: '/' },
    { label: 'Deploy', iconName: 'Rocket', path: '/deploy' },
    { label: 'Region', iconName: 'Earth', path: '/region' },
    { label: 'Resource', iconName: 'Package', path: '/resource' },
    { label: 'Utility', iconName: 'PencilRuler', path: '/utility' },
    { label: 'Credentials', iconName: 'KeySquare', path: '/credential' }
  ] as NavItemProps[]

  useEffect(() => {
    navigate(navItems[navIndex].path)
  }, [navIndex])

  return (
    <>
      <NavbarHeader title="R&D Tool" version />
      <Divider mt="sm" mb="sm" />
      <Stack h="85%" gap={0}>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            index={index}
            label={item.label}
            path={item.path}
            iconName={item.iconName}
            isActive={navIndex === index}
            onItemClick={setNavIndex}
          />
        ))}
      </Stack>
      <Divider mb="sm" />
      <NavbarFooter username={username} usermail={usermail} />
    </>
  )
}
