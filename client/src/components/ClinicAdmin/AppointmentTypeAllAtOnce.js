import React, { useState } from 'react';
import { Table, Container, Col, Row, Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointmentType } from '../../store/clinic_admin/actions';

const AppointmentTypAllAtOnce = () => {
    const dispatch = useDispatch();
    const[appointmentType, setAppointmentType] = useState();

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleAddAppointmentType = () => {
        dispatch(
            addAppointmentType({
                appointmentType
            })
        );
    };

    return (
        <>
            <Modal show={show1} onHide={handleClose1} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit data:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Col}>
                            <Form.Label>Type:</Form.Label>
                            <Form.Control type="text" onChange={({ currentTarget }) => { setAppointmentType(currentTarget.value); }}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1}>
                        Edit
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add data:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Col}>
                            <Form.Label>Type:</Form.Label>
                            <Form.Control type="text" placeholder="Enter a new type"  onChange={({ currentTarget }) => { setAppointmentType(currentTarget.value); }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddAppointmentType}>
                        Add
          </Button>
                </Modal.Footer>
            </Modal>



            <Container>
                <Row>
                    <h3>Appointment type- adding, deliting, editing and searching</h3>
                </Row>
                <Row>
                    <Form>
                        <Form.Group as={Row} >

                            <Form.Label>PROBA_TEST:</Form.Label>
                            <Col>
                                <Button onClick={handleShow1}>ProbaJadna </Button>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} >

                            <Form.Label>Add new appointment type:</Form.Label>
                            <Col>
                                <Button onClick={handleShow2} >Add </Button>
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
        </>
    );
}

export default AppointmentTypAllAtOnce;