import { type AppShellProps } from '@mantine/core'
import HomePageTemplate from '@renderer/components/template/HomePageTemplate'

export default function HomePage(): JSX.Element {
  const AppConfig: AppShellProps = {
    navbar: {
      width: '20%',
      breakpoint: 'sm'
    },
    padding: 'md'
  }

  return <HomePageTemplate {...AppConfig} />
}
