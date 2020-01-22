import React, { useState } from 'react';
import useStateWithCallback from 'use-state-with-callback';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { searchRoomsData, fetchRoomsData } from '../../store/rooms/actions';
import RoomList from './RoomList';


const RoomSearch = ({ match }) => {
    const dispatch = useDispatch();
    const clinicId = match.params.clinicId;
    const [today, setToday] = useState(moment().format('YYYY-MM-DD'));
    const [date, setDate] = useState();
    const [name, setName] = useState('');
    const [pageCnt, setPageCnt] = useState(0);
    const [flag, setFlag] = useState(false);
    const [dateString, setDateString] = useStateWithCallback(moment().format('YYYY-MM-DD'), sdString => {
        setDate((new Date(sdString)).getTime() / 1000 | 0);

    });

    const handleRoomsSearch = () => {
        setFlag(true);
        dispatch(
            searchRoomsData({
                name,
                date,
                clinicId,
                pageCnt
            })
        );
    };

    const handleFetchAll = () => {
        setFlag(false);
        dispatch(
            fetchRoomsData({
                clinicId,
                pageCnt
            })
        );
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">Search rooms</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Room name:</Form.Label>
                                <Form.Control type="text" placeholder="Name"
                                    onChange={({ currentTarget }) => {
                                        setName(currentTarget.value);
                                    }} />
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Date:</Form.Label>
                                <Form.Control type="date" min={today} value={dateString} id="date1"
                                    onChange={({ currentTarget }) => {
                                        setDateString(currentTarget.value);
                                    }} />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" className="mb-4" onClick={handleRoomsSearch}>
                            Search
                        </Button>

                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Button variant="primary" className="mb-4" onClick={handleFetchAll}>
                        Fetch all
                    </Button>
                </Col>
            </Row>
            <RoomList clinicId={clinicId} searchFlag={flag} name={name} date={date} cnt={pageCnt} />
        </Container>
    );

}

export default RoomSearch;