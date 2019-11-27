import React from 'react';
import {Container,Row, Table, Button} from 'react-bootstrap';

function DeleteDoctor(){
    return(
        <Container>
            <Row>
                <h3>Approve or refuse registration requests</h3>
            </Row>
            <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>1</td>
                            <td>Aca</td>
                            <td>Pppppp</td>
                            <td>
                            <Button variant="danger" type="primary"> Delete </Button>
                            </td>
                            </tr>
                    </tbody>
                </Table>

            </Row>
        </Container>
    );
}

export default DeleteDoctor;