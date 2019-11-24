import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function AdminReg(){
    return(
        <Container>
            <Row>
                <Col md={{ span:5, offset: 2 }} xs={12}>
                    <h2 className="border-bottom">Registrating new admin</h2>
                </Col>
            </Row>
                <Row>
                <Col md={{ span:5, offset: 2 }} xs={12}>
                        <Form>
                            <Form.Group >
                                <Form.Label>E-mail of admin:</Form.Label>
                                <Form.Control type="text" placeholder="Enter admins e-mail" />
                            </Form.Group>
    
                            <Form.Group >
                                <Form.Label>Choose admins password:</Form.Label>
                                <Form.Control type="password" placeholder="Admin of chosen clinic" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Registrer
                            </Button>
                        </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminReg;