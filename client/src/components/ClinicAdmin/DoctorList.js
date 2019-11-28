import React, {useState,useEffect} from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {doctorsDataSelector} from '../../store/clinic_admin/selectors';
import {addDoctor,  fetchDoctorData} from '../../store/clinic_admin/actions';

const DoctorList = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    //const doctors = useSelector(clinicsDataSelector);

    const handleAddDoctor = () => {
        dispatch(
            addDoctor({
                firstName,
                lastName,
                email
            })
        );
    };
   
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
                        
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default DoctorList;