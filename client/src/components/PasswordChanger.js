import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changePassword } from '../store/user/actions';


const PasswordChanger = () => {
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const handleChange = () =>{
        dispatch(
            changePassword({
                oldPassword,
                newPassword
            })
        );
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h1 className="border-bottom">Change password:</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Group as={Col} controlId="formOld">
                            <Form.Label>Old password:</Form.Label>
                            <Form.Control type="password" placeholder="Enter old password"
                                onChange={({ currentTarget }) => {
                                    setOldPassword(currentTarget.value);
                            }} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formNew">
                            <Form.Label>New password</Form.Label>
                            <Form.Control type="password" placeholder="Enter new password"
                                onChange={({ currentTarget }) => { 
                                    setNewPassword(currentTarget.value); 
                            }} />
                        </Form.Group>
                        <Button variant="primary" onClick={handleChange}>
                            Change
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default PasswordChanger;