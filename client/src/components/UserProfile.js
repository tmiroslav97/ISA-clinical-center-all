import React from 'react';
import { Row, Tab, Nav, Col, Container, Table } from 'react-bootstrap';

const UserProfile = ({ data }) => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">User profile</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <tr>
                            <th>First name</th>
                            <td align="right">{data.firstName}</td>
                        </tr>
                        <tr>
                            <th>Last name</th>
                            <td align="right">{data.lastName}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td align="right">{data.email}</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="/change-pass">Change password</a>
                            </td>
                        </tr>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default UserProfile;