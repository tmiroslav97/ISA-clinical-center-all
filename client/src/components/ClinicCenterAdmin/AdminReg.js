import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function AdminReg() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fistName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const handleRegister = () => {

    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">Registrating new admin</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Admin e-mail:</Form.Label>
                                <Form.Control type="text" placeholder="Enter admin e-mail"
                                    onChange={({ currentTarget }) => {
                                        setEmail(currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Admin password:</Form.Label>
                                <Form.Control type="password" placeholder="Enter admin password"
                                    onChange={({ currentTarget }) => {
                                        setPassword(currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>First name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter admin first name"
                                    onChange={({ currentTarget }) => {
                                        setFirstName(currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Last name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter admin last name"
                                    onChange={({ currentTarget }) => {
                                        setLastName(currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" onClick={handleRegister}>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminReg;