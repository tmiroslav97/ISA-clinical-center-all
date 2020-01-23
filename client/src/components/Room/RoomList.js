import React, { useState, useEffect } from 'react';
import useStateWithCallback from 'use-state-with-callback';
import { Container, Row, Col, Spinner, Table, Pagination, PageItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { roomsDataSelector, isFetchRoomsSelector } from '../../store/rooms/selectors';


const RoomList = ({ filterTerm, cnt }) => {
    const rooms = useSelector(roomsDataSelector);
    const isFetchRoomsData = useSelector(isFetchRoomsSelector);
    

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
                    <h3>Rooms list</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rooms.filter(room => room.type.includes(filterTerm)).map((room, index) => {
                                    return (
                                        <tr key={room.id}>
                                            <td>{cnt * 10 + index + 1}</td>
                                            <td>{room.name}</td>
                                            <td>{room.roomNum}</td>
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