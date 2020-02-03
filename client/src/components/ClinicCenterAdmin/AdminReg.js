import React, { useState, useEffect } from 'react';
import { history } from '../../index';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { regCCAdmin } from '../../store/user/actions';
import { userIdSelector, userDataSelector } from '../../store/user/selectors';

const AdminReg = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const ccaId = useSelector(userIdSelector);
    const userData = useSelector(userDataSelector);

    useEffect(() => {
        if (!userData.predefined) {
            history.push('/ccadmin');
        }
    }, [ccaId]);

    const handleRegCCAdmin = () => {
        dispatch(
            regCCAdmin({
                ccaId,
                email,
                password,
                firstName,
                lastName
            })
        );
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">Registrating new clinic center admin</h2>
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
                        <Button variant="primary" onClick={handleRegCCAdmin}>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminReg;