import React from 'react';
import {Tab, Nav, Col,Row } from 'react-bootstrap';
import AddDoctor from './AddDoctor';
import DeleteDoctor from './DeleteDoctor';
import SearchDoctor from './SearchDoctor';

function Doctors(){
    return(
        <Tab.Container id="left-tabs-doc-home" >
            <Row>
            <Col sm={2}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">Add</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Delete</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">Search</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <AddDoctor/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <DeleteDoctor/>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <SearchDoctor/>
                </Tab.Pane>
                </Tab.Content>
            </Col>
            </Row>
        </Tab.Container>
    );
}

export default Doctors;