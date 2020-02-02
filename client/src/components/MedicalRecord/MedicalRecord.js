import React, { useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { isFetchMedicalRecordSelector, medicalRecordSelector } from '../../store/medical_record/selectors';


const MedicalRecord = ({ typeId }) => {
    const dispatch = useDispatch();
    const isFetchMedicalRecord = useSelector(isFetchMedicalRecordSelector);
    const medicalRecord = useSelector(medicalRecordSelector);

    const handleEditMedicalRecord = () => {

    };

    if (!isFetchMedicalRecord) {
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
                    <h2 className="border-bottom">Medical record</h2>
                </Col>
            </Row>

        </Container>
    );
}

export default MedicalRecord;