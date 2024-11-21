import ErrorClass from '@styles/ErrorPage.module.css'
import { Text, Button, Container, Group } from '@mantine/core'
import { useGlobalStore } from '@hooks/stores/GlobalStore'

export default function ErrorPage(): JSX.Element {
  const { setNavIndex } = useGlobalStore()

  return (
    <Container className={ErrorClass.root}>
      <div className={ErrorClass.label}>404</div>
      <Text c="dimmed" size="lg" ta="center" className={ErrorClass.description}>
        Unfortunately, this is only a 404 page. <br />
        You may have error, or the page hasn't been developed yet.
      </Text>
      <Group justify="center" onClick={() => setNavIndex(0)}>
        <Button variant="light" radius="md" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  )
}
