import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStateWithCallback from 'use-state-with-callback';
import { Row, Form, Col, Button, Container } from 'react-bootstrap';
import moment from 'moment';
import HolAbsRequestsTable from './HolAbsRequestsTable';
import { absHolRequest } from '../../store/absence_holiday/actions';
import { userDataSelector } from '../../store/user/selectors';

const HolAbsRequest = () => {
    const dispatch = useDispatch();
    const data = useSelector(userDataSelector);
    const clinicId = data.clinicId;
    const personnelId = data.id;
    //eslint-disable-next-line
    const [today, setToday] = useState(moment().format('YYYY-MM-DD'));
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startDateString, setStartDateString] = useStateWithCallback(moment().format('YYYY-MM-DD'), sdString => {
        setStartDate((new Date(sdString)).getTime() / 1000 | 0);

    });
    const [endDateString, setEndDateString] = useStateWithCallback(moment().format('YYYY-MM-DD'), edString => {
        setEndDate((new Date(edString)).getTime() / 1000 | 0);
    });

    const [type, setType] = useState('Absence');


    const handleSubmit = () => {
        dispatch(
            absHolRequest({
                startDate,
                endDate,
                type,
                personnelId,
                clinicId
            })
        );
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 5, offset: 3 }} xs={12}>
                    <h3 align="center" className="border-bottom">Holiday/absence request</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 4 }} xs={12}>
                    <Form>
                        <Form.Group as={Col}>
                            <div align="center">
                                <Form.Label>Type of request</Form.Label>
                            </div>
                            <Form.Control as="select" onChange={({ currentTarget }) => {
                                setType(currentTarget.value);
                            }} >
                                <option key="0" value="Absence">Absence</option>
                                <option key="1" value="Holiday">Holiday</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <div align="center">
                                <Form.Label>Choose start date:</Form.Label>
                            </div>
                            <Form.Control type="date" min={today} value={startDateString} id="date1"
                                onChange={({ currentTarget }) => {
                                    setStartDateString(currentTarget.value);
                                }} />

                        </Form.Group>
                        <Form.Group as={Col} >
                            <div align="center">
                                <Form.Label>Choose end date:</Form.Label>
                            </div>
                            <Form.Control type="date" min={today} value={endDateString} id="date2"
                                onChange={({ currentTarget }) => {
                                    setEndDateString(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <div align="center">
                                <Button variant="primary" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <HolAbsRequestsTable personnelId={personnelId} />
        </Container>
    );
}

export default HolAbsRequest;