import ErrorClass from '@styles/ErrorPage.module.css'
import { useNavigate } from 'react-router-dom'
import { useGlobalStore } from '@hooks/stores/GlobalStore'
import { Text, Button, Container, Group } from '@mantine/core'

export default function ErrorPage(): JSX.Element {
  const navigate = useNavigate()
  const { setNavIndex } = useGlobalStore()

  const moveHome = () => {
    setNavIndex(0)
    navigate('/')
  }

  return (
    <Container className={ErrorClass.root}>
      <div className={ErrorClass.label}>404</div>
      <Text c="dimmed" size="lg" ta="center" className={ErrorClass.description}>
        Unfortunately, this is only a 404 page. <br />
        You may have error, or the page hasn't been developed yet.
      </Text>
      <Group justify="center">
        <Button variant="light" radius="md" size="md" onClick={moveHome}>
          Take me back to home page
        </Button>
      </Group>
    </Container>
  )
}
