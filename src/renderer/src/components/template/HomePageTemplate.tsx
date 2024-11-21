import { AppShell, type AppShellProps } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import Navbar from '@organism/Navbar'

export default function HomePageTemplate({ ...props }: AppShellProps) {
  return (
    <AppShell {...props}>
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
