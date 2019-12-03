import React, { useState } from 'react';
import { Row, Form, Col, Button, Container } from 'react-bootstrap';
import moment from 'moment';

const HolAbsRequest = () => {
    const [requestType, setRequestType] = useState();
    const [yesterday, setYesterday] = useState(moment().format('YYYY-MM-DD'));
    console.log(yesterday);
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
                                setRequestType(currentTarget.value);
                            }} >
                                <option value="Absence">Absence</option>
                                <option value="Holiday">Holiday</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <div align="center">
                                <Form.Label>Choose start date:</Form.Label>
                            </div>
                            <Form.Control type="date" min={yesterday}/>

                        </Form.Group>
                        <Form.Group as={Col} >
                            <div align="center">
                                <Form.Label>Choose end date:</Form.Label>
                            </div>
                            <Form.Control type="date" min={yesterday}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <div align="center">
                                <Button variant="primary">
                                    Submit
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
}

export default HolAbsRequest;