import React, { useState } from 'react';
import { Container, Row, Col, Spinner, Table, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PickedSurReq from './PickedSurReq';
import { pickSurReqSelector, pickedSurReqSelector, pickTermSelector, pickedTermSelector } from '../../store/sur-req/selectors';
import { userDataSelector } from '../../store/user/selectors';


const SurReqDoctors = () => {
    const pickSurReq = useSelector(pickSurReqSelector);
    const pickedSurReq = useSelector(pickedSurReqSelector);
    const pickTerm = useSelector(pickTermSelector);
    const pickedTerm = useSelector(pickedTermSelector);
    const data = useSelector(userDataSelector);
    const clinicId = data.clinicId;

    console.log(pickedSurReq);

    return (
        <Container>
            {
                pickSurReq ?
                    <PickedSurReq pickedSurReq={pickedSurReq} /> : null
            }
            {
                pickTerm ?
                    <Row>
                        <Col md={{ span: 10, offset: 1 }} xs={12}>
                            <h2 className="border-bottom">Picked term</h2>
                        </Col>
                        <Col md={{ span: 10, offset: 1 }} xs={12}>
                            <div>{pickedTerm}</div>
                        </Col>
                    </Row> : null
            }
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3>Pick doctor</h3>
                </Col>
            </Row>

        </Container>
    );
}

export default SurReqDoctors;