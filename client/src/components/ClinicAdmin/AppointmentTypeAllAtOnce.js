import React from 'react';
import {Table, Container, Col, Row, Form, Button} from 'react-bootstrap';

const AppointmentTypAllAtOnce = () => {
    return(
        <Container>
            <Row>
                <h3>Appointment type- adding, deliting, editing and searching</h3>
            </Row>
            <Row>
                <Form>

                    <Form.Group as={Row} >

                        <Form.Label>Add new appointment type:</Form.Label>
                        <Col>
                            <Button>Add </Button>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >

                        <Form.Label>Search appointment types:</Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Search " />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formGridState">
                        <Form.Label>Filter data by</Form.Label>
                        <Col>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>


                </Form>

            </Row>
            <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                        }
                    </tbody>
                </Table>
            </Row>
        </Container >
    );
}

export default AppointmentTypAllAtOnce;