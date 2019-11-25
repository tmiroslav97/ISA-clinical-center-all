import React from 'react';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';

function ClinicReg(){
    return(
        <Container>
            <Row>
                <Col md={{span:6, offset:2}} xs={12}>
                    <h2 className="border-bottom">Registrating clinic and its admin</h2>
                </Col>
            </Row>
                <Row>
                <Col md={{ span:6, offset: 2 }} xs={12}>
                        <Form>
                            <Form.Group >
                                <Form.Label>Clinic:</Form.Label>
                                <Form.Control type="text" placeholder="Enter clinic that you want to registrate" />
                            </Form.Group>
    
                            <Form.Group >
                                <Form.Label>Choose admin for clinic:</Form.Label>
                                <Form.Control type="text" placeholder="Admin of chosen clinic" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Registrate
                            </Button>
                        </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ClinicReg;