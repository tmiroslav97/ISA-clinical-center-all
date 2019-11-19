import React from 'react';
import {Form, Row,Col, Button} from 'react-bootstrap';

function BookingDoc(){
    return(
        
        <Form>
            <Row>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                    <h2>Booking surgery/apointment</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Group as={Col}>
                            <h3  className="border-top">Booking an apointment</h3>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Choose a date for your apointment:</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="date"  />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Choose a time for your apointment:</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="time"  />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Button>
                                Book apointment
                            </Button>
                        </Form.Group>
                    </Form>
                    
                </Col>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                <Form>
                        <Form.Group as={Col}>
                            <h3 className="border-top">Booking a surgery</h3>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Choose a date for your surgery:</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="date"  />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Choose a time for your surgery:</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="time"  />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Button>
                                Book surgery
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Form>
    );
}

export default BookingDoc;