import React, { useState, useEffect }  from 'react';
import {Container,Form,Col,Row, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {doctorsDataSelector} from '../../store/clinic_admin/selectors';
import { fetchDoctorData} from '../../store/clinic_admin/actions';

const AddDoctor = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    const handleAddDoctor = () => {
        dispatch(
            
        );
    };
    useEffect(() => {
        dispatch(
            fetchDoctorData({})
        );
    }, []);

    return(
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h1 className="border-bottom">Add new doctor</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicEmail">
                                <Form.Label>E-mail address</Form.Label>
                                <Form.Control type="email" placeholder="E-mail" onChange={({ currentTarget }) => {
                                    setEmail(currentTarget.value);
                                }} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="First name" onChange={({ currentTarget }) => {
                                    setFirstName(currentTarget.value);
                                }}/>
                            </Form.Group>
                        </Form.Row>  
                        <Form.Row>
                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Last name"  onChange={({ currentTarget }) => {
                                    setLastName(currentTarget.value);
                                }}/>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" onClick={handleAddDoctor}>
                            Add Doctor
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddDoctor;