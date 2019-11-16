import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function RegPage() {
    return (
        <Container>
            <Row>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                    <h1 className="border-bottom">Registration</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicEmail">
                                <Form.Label>E-mail address</Form.Label>
                                <Form.Control type="email" placeholder="E-mail" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formAddressd">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formConfirmPassword">
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm your password" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Country" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="First name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formContact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="text" placeholder="Contact" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formUNOIP">
                                    <Form.Label>Unique number of insured persons</Form.Label>
                                    <Form.Control type="text" placeholder="UNOIP" />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Sign-in
                        </Button>
                    </Form>
                </Col>
            </Row>      
        </Container>
    );
  }
  
  export default RegPage;