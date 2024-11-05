import { Text, Button, Container, Group } from "@mantine/core"
import classes from "../style/Error.module.css"

export function ErrorPage() {
  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is only a 404 page. <br />
        You may have error, or the page hasn't been developed yet.
      </Text>
      <Group justify="center">
        <Button color="green" variant="light" radius="md" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  )
}
