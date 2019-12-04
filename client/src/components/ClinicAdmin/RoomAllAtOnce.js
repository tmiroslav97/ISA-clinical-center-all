import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Button, Col, Form } from 'react-bootstrap';
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

    return (
        <Container>
            <Row>
                <h3>Examination and surgery room - adding, deliting, editing and searching</h3>
            </Row>
            <Row>
                <Form>

                    <Form.Group as={Row} >

                        <Form.Label>Add new surgery room:</Form.Label>
                        <Col>
                            <Button>Add </Button>
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
                                            <Button>Edit</Button>
                                        </td>
                                        <td>
                                            <Button>Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </Row>
        </Container >
    );
}


export default RoomAllAtOnce;