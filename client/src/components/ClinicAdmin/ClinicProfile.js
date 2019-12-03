import React from 'react';
import { Nav, Col, Row , Tab} from 'react-bootstrap';
import DoctorList from "./DoctorList";
import RoomList from "./RoomList";
import Pricelist from "./Pricelist";
import FreeApointment from "./FreeApointment";
import ClinicProfileInfo from "./ClinicsProfileInfo";

const ClinicProfile = () => {
    return(
        <Tab.Container id="left-tabs-doc-home" >
            <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">Doctors list</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Exeminationrooms list</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">Pricelist</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fourth">Free apointments</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fifth">Clinic info</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <DoctorList/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <RoomList/>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <Pricelist/>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                    <FreeApointment/>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                    <ClinicProfileInfo/>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    );
}

export default ClinicProfile;