import React from 'react';
import {Tab, Nav, Col, Row} from 'react-bootstrap';

const Appointments = () => {
    return(
        <Tab.Container id="left-tabs-doc-home" >
            <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">Add</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Edit</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">Delete</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fourth">Search</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                    
                </Tab.Pane>
                </Tab.Content>
            </Col>
            </Row>
        </Tab.Container>
    );
}

export default Appointments;