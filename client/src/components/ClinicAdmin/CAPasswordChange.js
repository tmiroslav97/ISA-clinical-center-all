import React from 'react';
import {Container, Row, Col,Form, Button} from 'react-bootstrap';
import PasswordChange from '../PasswordChange';

const CAPasswordChange = () => {
    return(
        <Container>
            <Row>
                <Col md={{ span:3, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Group controlId="formBasicChangePassword">
                            <Form.Label>Change your password</Form.Label>
                            <Form.Control type="password" placeholder="Change password" />
                        </Form.Group>
 
                        <Form.Group controlId="formBasicPasswordConfirm">
                            <Form.Label>Confirm your password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Change
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default PasswordChange;