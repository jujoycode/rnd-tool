import { Container, Calendar as CalendarComponent } from 'rsuite'

import '../css/Calendar.css'

function Calendar() {
  return (
    <div id="CalendarContainer">
      <Container id="Calendar">
        <CalendarComponent bordered />
      </Container>
    </div>
  )
}

export default Calendar
