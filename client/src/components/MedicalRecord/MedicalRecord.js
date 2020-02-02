import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { isFetchMedicalRecordSelector, medicalRecordSelector } from '../../store/medical_record/selectors';
import { fetchMedicalRecordByApp } from '../../store/medical_record/actions';
import { fetchPatientByApp } from '../../store/patients/actions';
import { isFetchPatientsSelector, patientSelector } from '../../store/patients/selectors';




const MedicalRecord = ({ match }) => {
    const dispatch = useDispatch();
    const isFetchMedicalRecord = useSelector(isFetchMedicalRecordSelector);
    const medicalRecord = useSelector(medicalRecordSelector);
    const typeId = match.params.typeId;
    const patient = useSelector(patientSelector);
    const isFetchPatient = useSelector(isFetchPatientsSelector);

    useEffect(() => {
        if (typeId != null) {
            dispatch(
                fetchMedicalRecordByApp({
                    typeId
                })
            );

            dispatch(
                fetchPatientByApp({
                    typeId
                })
            );
        }
    }, [typeId]);

    const handleEditMedicalRecord = () => {

    };

    if (!isFetchMedicalRecord || !isFetchPatient) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3 className="border-bottom">Patient information</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <tbody>
                            <tr>
                                <th>First name</th>
                                <td align="right">{patient.firstName}</td>
                            </tr>
                            <tr>
                                <th>Last name</th>
                                <td align="right">{patient.lastName}</td>
                            </tr>
                            <tr>
                                <th>UNOIP</th>
                                <td align="right">{patient.unoip}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <h3 className="border-bottom">Medical record</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <tbody>
                            <tr>
                                <th>Blood type</th>
                                <td align="right">{medicalRecord.bloodType}</td>
                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td align="right">{medicalRecord.weight}</td>
                            </tr>
                            <tr>
                                <th>Height</th>
                                <td align="right">{medicalRecord.height}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

        </Container>
    );
}

export default MedicalRecord;