import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

function DoctorList(){
    return(
            <Container>
            <Row >
                <Col md={{ span:10, offset:1 }} xs={12}>
                    <h3 className="border-bottom">Doctor list</h3>
                </Col>
            </Row>
            
            <Row>
                    <Col md={{span:10, offset:1}} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Cica</td>
                            <td>Gorio</td>
                            <td>cica@gmail.com</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Vuk</td>
                            <td>Stepski</td>
                            <td>vuk@yahoo.com</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Ana</td>
                            <td>Karenjina</td>
                            <td>ana@gmail.com</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default DoctorList;