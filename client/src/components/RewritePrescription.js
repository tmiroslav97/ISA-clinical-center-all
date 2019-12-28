import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Container, Table } from 'react-bootstrap';
import { prescriptionsDataSelector } from '../store/prescriptions/selectors';
import { fetchPrescriptions, rewritePrescription } from '../store/prescriptions/actions';

const RewritePrescription = ({ nurseId }) => {
    const dispatch = useDispatch();
    const prescriptions = useSelector(prescriptionsDataSelector);

    const handleRewrite = (recepieId) => {
        dispatch(
            rewritePrescription({
                nurseId,
                recepieId
            })
        );
    };

    useEffect(() => {
        if (nurseId != null) {
            dispatch(
                fetchPrescriptions({})
            );
        }
    }, [nurseId]);

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3>Prescriptions for rewrite (only test for rewrite)</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Rewrite</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prescriptions.map((prescription, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <Button variant="primary" onClick={() => handleRewrite(prescription.id)}>
                                                    Rewrite
                                                    </Button>
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

export default RewritePrescription;