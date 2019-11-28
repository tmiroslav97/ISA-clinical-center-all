import React from 'react';
import {Container, Form, Row, Col, Table} from 'react-bootstrap';

const SearchDoctor = () => {
    return(
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Row>
                            <Form.Group >
                                <Form.Label>Search doctor by name: </Form.Label>
                            </Form.Group>
                            <Form.Group >
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Form.Row>
                    </Form>  
                </Col>                
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>1</td>
                            <td>Aca</td>
                            <td>Pppppp</td>
                            <td>jkabj@gmail.com</td>
                            </tr>
                    </tbody>
                </Table>
                </Col>
            
            </Row>
        </Container>
    );
}

export default SearchDoctor;