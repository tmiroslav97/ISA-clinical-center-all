import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Button, Col, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { roomsDataSelector } from '../../store/clinic_admin/selectors'
import { fetchRoomsData } from '../../store/clinic_admin/actions';

const RoomAllAtOnce = () => {
    const dispatch = useDispatch();
    const rooms = useSelector(roomsDataSelector);

    const handleDelitingRooms = () => {
        dispatch(

        );
    };

    useEffect(() => {
        dispatch(
            fetchRoomsData({})
        );
    }, []);

    const [show1r, setShow1r] = useState(false);
    const [show2r, setShow2r] = useState(false);

    const handleClose1r = () => setShow1r(false);
    const handleShow1r = () => setShow1r(true);
    const handleClose2r = () => setShow2r(false);
    const handleShow2r = () => setShow2r(true);

    return (
        <>
            <Modal show={show1r} onHide={handleClose1r} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit data:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label>Choose clinic:</Form.Label>
                            <Col>

                                <Form.Control type="text" disabled="true" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>Enter name of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Name " />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>Enter number of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Number " />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1r}>
                        Edit
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2r} onHide={handleClose2r} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add data:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label>Choose clinic:</Form.Label>
                            <Col>

                                <Form.Control as="select" >
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>Enter name of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Name " />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>Enter number of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Number " />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose2r}>
                        Add
          </Button>
                </Modal.Footer>
            </Modal>
            <Container>
                <Row>
                    <h3>Examination and surgery room - adding, deliting, editing and searching</h3>
                </Row>
                <Row>
                    <Form>

                        <Form.Group as={Row} >

                            <Form.Label>PROBA_TEST:</Form.Label>
                            <Col>
                                <Button onClick={handleShow1r}>ProbaJadna </Button>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} >

                            <Form.Label>Add new surgery room:</Form.Label>
                            <Col>
                                <Button onClick={handleShow2r}>Add </Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >

                            <Form.Label>Search surgery rooms:</Form.Label>
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
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rooms.map((room, index) => {
                                    return (
                                        <tr key={room.id}>
                                            <td>{room.name}</td>
                                            <td>{room.number}</td>
                                            <td>
                                                <Button onClick={handleShow1r}>Edit</Button>
                                            </td>
                                            <td>
                                                <Button onClick={handleDelitingRooms}>Delete</Button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container >
        </>
    );
}


export default RoomAllAtOnce;