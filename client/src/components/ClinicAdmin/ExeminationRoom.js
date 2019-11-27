import React from 'react';
import {Tab,Nav, Row, Col} from 'react-bootstrap';
import AddExRoom from './AddExRoom';
import EditExRoom from './EditExRoom';
import DeleteExRoom from './DeleteExRoom';
import SearchExRoom from './SearchExRoom';

function ExeminationRoom(){
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
                    <AddExRoom/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <EditExRoom/>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <DeleteExRoom/>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                    <SearchExRoom/>
                </Tab.Pane>
                </Tab.Content>
            </Col>
            </Row>
        </Tab.Container>
    );
}

export default ExeminationRoom;