import React from 'react';
import { Container, Row, Form, Col, Button, Table } from 'react-bootstrap';


const DoctorAllAtOnce = () => {
    return (
        <Container>
            <Row>
                <h3>Doctors - adding, deliting and searching</h3>
            </Row>

            <Row>
                <Form>

                    <Form.Group as={Row} >

                        <Form.Label>Add new doctor:</Form.Label>
                        <Col>
                            <Button>Add </Button>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >

                        <Form.Label>Search doctors:</Form.Label>
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
                            <th>Name</th>
                            <th>Number</th>
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

export default DoctorAllAtOnce;