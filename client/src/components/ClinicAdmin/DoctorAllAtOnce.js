import React,{useState} from 'react';
import { Container, Row, Form, Col, Button, Table, Modal } from 'react-bootstrap';


const DoctorAllAtOnce = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add data:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>E-mail address</Form.Label>
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm your password" />
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Country" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" placeholder="Contact" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>

                    </Form.Row>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>


        <Container>
            <Row>
                <h3>Doctors - adding, deliting and searching</h3>
            </Row>

            <Row>
                <Form>

                    <Form.Group as={Row} >

                        <Form.Label>Add new doctor:</Form.Label>
                        <Col>
                            <Button onClick={handleShow}>Add </Button>
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
        </>
    );
}

export default DoctorAllAtOnce;