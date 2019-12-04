import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Spinner, Row, Col } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import { fetchCalendar } from '../store/nurse/actions';
import { calendarDataSelector } from '../store/nurse/selectors';

const localizer = momentLocalizer(moment)

const WorkCalendar = ({ personnelId }) => {
    const dispatch = useDispatch();
    const calendar = useSelector(calendarDataSelector);

    useEffect(() => {
        if (personnelId != null) {
            dispatch(
                fetchCalendar({
                    personnelId
                })
            );
        }
    }, [personnelId]);

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
                        events={calendar.calendarItemResponses}
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