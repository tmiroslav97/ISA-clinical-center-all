import React from 'react';
import { Container, Spinner, Row, Col } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'

const localizer = momentLocalizer(moment)

function WorkCalendar() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3 align="center" className="border-bottom">Work calendar - in progress</h3>
                </Col>

            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Calendar
                        localizer={localizer}
                        events={[]}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 600 }}
                    />
                </Col>
            </Row>


        </Container>
    );
}

export default WorkCalendar;