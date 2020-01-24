import React from 'react';
import { Container, Row, Col, Table, Button, Pagination } from 'react-bootstrap';


const SurgeryReq = ({ match }) => {


    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3 className="border-bottom">Surgery requirements</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Required surgery date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (() => {
                                    return (
                                        <tr key={1}>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <Button>Reserve this</Button>
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

export default SurgeryReq;