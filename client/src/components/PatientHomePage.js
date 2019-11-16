import React from 'react';
import { Row, Tab, Nav, Col } from 'react-bootstrap';

function PatientHomePage(){
    return(
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col md={2}>
                    <Nav variante="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Clinics</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">History</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Medical record</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Profile</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col md ={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            komp1
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            komp2
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            komp3
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            komp4
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}
 
export default PatientHomePage;