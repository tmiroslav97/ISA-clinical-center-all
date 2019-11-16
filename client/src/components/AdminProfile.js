import React from 'react';
import { Row, Tab, Nav, Col } from 'react-bootstrap';
import RegRequests from './RegRequests';
import AddAdmin from './AddAdmin';
import DiagnosisRecord from './DiagnosisRecord';
import PerscriptionRecord from './PerscriptionRecord';

function AdminProfile(){
    return(
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col md={2} xs={12}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Registration requests</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Diagnosis record</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Perscription record</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="fourth">Add admin</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col md={10} xs={12}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <RegRequests/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <DiagnosisRecord/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <PerscriptionRecord/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                        <AddAdmin/>
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    );
}

export default AdminProfile;