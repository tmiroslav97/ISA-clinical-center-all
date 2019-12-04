import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Form, Col, Button, Container, Table } from 'react-bootstrap';
import moment from 'moment';

const RewriteRecepie = ({ nurseId }) => {
    const dispatch = useDispatch();
    const recepies = [];

    const handleRewrite = () => {

    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3>Recepies for rewrite (only test for rewrite)</h3>
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
                                recepies.map((recepie, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <Button variant="primary" onClick={() => handleRewrite(recepie.id)}>
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

export default RewriteRecepie;