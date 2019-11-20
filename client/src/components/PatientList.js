import React from 'react';
import {Table, Row,Col,  InputGroup, DropdownButton, Dropdown, Container, FormControl} from 'react-bootstrap';

function PatientList(){
    return(
        <Container>
            <Row >
                <Col md={{ span:10, offset:1 }} xs={12}>
                    <h3 className="border-bottom">Patients list</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{span:10, offset:1}} xs={12}>
                    <InputGroup>
                    <FormControl
                    placeholder="Sort patients by"
                    aria-describedby="basic-addon2"
                    />

                    <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title="Options"
                    id="input-group-dropdown-2"
                    >
                        <Dropdown.Item href="#">UNOIP</Dropdown.Item>
                        <Dropdown.Item href="#">First Name</Dropdown.Item>
                        <Dropdown.Item href="#">Last Name</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
                </Col>
            
            </Row>
            <Row>
                    <Col md={{span:10, offset:1}} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                            <th>UNOIP</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Pera</td>
                            <td>Peric</td>
                            <td>perica@gmail.com</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Ana</td>
                            <td>Kuk</td>
                            <td>ana@yahoo.com</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Ivo</td>
                            <td>Tot</td>
                            <td>top@gmail.com</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
export default PatientList;