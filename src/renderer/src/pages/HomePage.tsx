import { AppShell, type AppShellProps } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import Navbar from '@organism/Navbar'

export default function HomePage(): JSX.Element {
  const AppConfig: AppShellProps = {
    navbar: {
      width: '20%',
      breakpoint: 'sm'
    },
    padding: 'md'
  }

  return (
    <AppShell {...AppConfig}>
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
