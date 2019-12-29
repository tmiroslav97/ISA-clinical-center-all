import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { regClinic } from '../../store/clinics/actions';
import ClinicTable from './ClinicTable';


const ClinicReg = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [address, setAddress] = useState();

    const handleClinicReg = () => {
        dispatch(
            regClinic({
                name,
                description,
                address
            })
        );
    };

   
    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">Registrating clinic</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Group as={Col}>
                            <Form.Label>Clinic name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter clinic name"
                                onChange={({ currentTarget }) => {
                                    setName(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Clinic description:</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter clinic description"
                                onChange={({ currentTarget }) => {
                                    setDescription(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Clinic address:</Form.Label>
                            <Form.Control type="text" placeholder="Enter clinic address"
                                onChange={({ currentTarget }) => {
                                    setAddress(currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Button variant="primary" onClick={handleClinicReg}>
                                Register
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <ClinicTable/>
        </Container>
    );
}

export default ClinicReg;