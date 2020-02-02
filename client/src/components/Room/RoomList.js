import React, { useState } from 'react';
import { Container, Row, Col, Spinner, Table, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { roomsDataSelector, isFetchRoomsSelector } from '../../store/rooms/selectors';
import { pickSurReqSelector } from '../../store/sur-req/selectors';
import { fetchPickDoc } from '../../store/sur-req/actions';


const RoomList = ({ filterTerm, cnt }) => {
    const dispatch = useDispatch();
    const rooms = useSelector(roomsDataSelector);
    const isFetchRoomsData = useSelector(isFetchRoomsSelector);
    const pickSurReq = useSelector(pickSurReqSelector);
    const [pickedTerm, setPickedTerm] = useState('');
    const [preTermins, setPreTermins] = useState([7, 10, 13, 16]);

    const handleTerm = (pickedRoom) => {
        dispatch(
            fetchPickDoc({
                pickedRoom,
                pickedTerm
            })
        );
    };

    const handleFirst = (pickedRoom, pickedTerm) => {
        dispatch(
            fetchPickDoc({
                pickedRoom,
                pickedTerm
            })
        );
    };

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
                                <th>Term</th>
                                <th>First free</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                rooms.filter(roomsDto => roomsDto.room.type.includes(filterTerm)).map((roomsDto, index) => {
                                    return (
                                        <tr key={roomsDto.room.id}>
                                            <td>{cnt * 10 + index + 1}</td>
                                            <td>{roomsDto.room.name}</td>
                                            <td>{roomsDto.room.roomNum}</td>
                                            <td>
                                                <Form>
                                                    <Form.Group as={Col}>
                                                        <Form.Control as="select" defaultValue={"none"} onChange={({ currentTarget }) => {
                                                            setPickedTerm(currentTarget.value);
                                                        }} >
                                                            <option value="none" disabled hidden>Please choose term</option>
                                                            {
                                                                preTermins.map((termin, index) => {
                                                                    let flag = roomsDto.termins.includes(termin);
                                                                    return (
                                                                        <option key={termin} disabled={flag} value={roomsDto.date + " " + termin + "-" + (termin + 3)}>{termin}-{termin + 3}</option>
                                                                    );
                                                                })
                                                            }
                                                        </Form.Control>
                                                        {
                                                            pickSurReq ? <Button className="mt-2" onClick={(e) => { handleTerm(roomsDto.room.id) }}>Reserve</Button> : null
                                                        }
                                                    </Form.Group>

                                                </Form>
                                            </td>
                                            <td>{roomsDto.firstFreeTermin}<br />
                                                {
                                                    pickSurReq ? <Button onClick={(e) => { handleFirst(roomsDto.room.id, roomsDto.firstFreeTermin) }}>Reserve</Button> : null
                                                }
                                            </td>
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