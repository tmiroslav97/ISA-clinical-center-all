import React from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clinicsDataSelector } from '../../store/patient/selectors';

const ClinicSearch = () => {
    const dispatch = useDispatch();
    const clinics = useSelector(clinicsDataSelector);



    return (
        <Container>
            <Row>
                
                <h2 className="border-bottom">Clinics List</h2>
                
            </Row>
            <Row>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label>Search:</Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Search clinics" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridState">
                        <Form.Label>Filter clinics by</Form.Label>
                        <Col>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as = {Row} controlId="formGridState">
                        <Form.Label>Sort clinics by</Form.Label>
                        <Col>
                            <Form.Control as = "select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Average rating</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clinics.map((clinic, index) => {
                                    return (
                                        <tr key={clinic.id}>
                                            <td>{clinic.name}</td>
                                            <td>{clinic.address}</td>
                                            <td>{clinic.sumRating / clinic.cntRating}</td>
                                            <td>{clinic.priceList}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                
            </Row>
        </Container>
    )

}

export default ClinicSearch;