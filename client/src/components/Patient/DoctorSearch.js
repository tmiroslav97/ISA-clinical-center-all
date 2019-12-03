import React from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { doctorsDataSelector } from '../../store/patient/selectors';

const DoctorSearch = () => {
    const dispatch = useDispatch();
    const doctors = useSelector(doctorsDataSelector);



    return (
        <Container>
            <Row>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                    <h2 className="border-bottom">Searching and filtering doctors</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Average rating</th>
                            </tr>
                        </thead>
                    </Table>
                </Col>
            </Row>
        </Container>
    )

}

export default DoctorSearch;