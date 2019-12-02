import React from 'react';
import {Container, Row, Col,Table} from 'react-bootstrap';

const RoomList = () => {
    return(
        <Container>
            <Row >
                <Col md={{ span:5, offset:1 }} xs={12}>
                    <h3 className="border-bottom">Exeminationroom list</h3>
                </Col>
            </Row>
            
            <Row>
                    <Col md={{span:5, offset:1}} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Room number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>100</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>111</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>222</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default RoomList;