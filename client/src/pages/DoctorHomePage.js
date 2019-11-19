import React from 'react';
import { Tab, Nav, Col, Row } from 'react-bootstrap';
import UserProfile from '../components/UserProfile';
import PatientList from '../components/PatientList';
import WorkCalendar from '../components/WorkCalendar';
import HolidayRequest from '../components/HolidayRequest';
import BookingDoc from '../components/BookingDoc';
import ApointmentInfo from '../components/ApointmentInfo';

function DoctorHomePage(){
    return(
        <Tab.Container id="left-tabs-doc-home" defaultActiveKey="first">
            <Row>
                <Col md={2} xs={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Patients list</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Apointment info</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Calendar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Make holiday request</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="sixth">Book apointment/surgery</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col md={10} xs={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <PatientList/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <ApointmentInfo/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <WorkCalendar/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <HolidayRequest/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                            <UserProfile/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                            <BookingDoc/> 
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default DoctorHomePage;