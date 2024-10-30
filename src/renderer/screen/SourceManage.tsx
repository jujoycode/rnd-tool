import { Container, Text, InlineEdit, Input } from 'rsuite'
import '../css/SourceManage.css'

function SourceManage() {
  return (
    <Container>
      <Container id="pathContainer">
        <Text>Path: </Text>
        <InlineEdit id="pathInput" placeholder="click to edit..." />
      </Container>
    </Container>
  )
}

export default SourceManage
