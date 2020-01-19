import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { roomsDataSelector, isFetchRoomsSelector } from '../../store/rooms/selectors';
import { clinicsDataSelector } from '../../store/clinics/selectors';
import { fetchRoomsData } from '../../store/rooms/actions';


const RoomList = ({ clinicId }) => {
    const dispatch = useDispatch();
    const rooms = useSelector(roomsDataSelector);
    const isFetchRoomsData = useSelector(isFetchRoomsSelector);

    useEffect(() => {
        dispatch(
            fetchRoomsData({ clinicId })
        );
    }, [clinicId]);

    if (!isFetchRoomsData) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3>Clinics list</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rooms.map((room, index) => {
                                    return (
                                        <tr key={room.id}>
                                            <td>{index + 1}</td>
                                            <td>{room.name}</td>
                                            <td>{room.type}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default RoomList;