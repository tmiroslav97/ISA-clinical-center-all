import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Table, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { diagnosesSelector, isFetchDiagnosesSelector, isFetchMedicinesSelector, medicinesSelector } from '../../store/medicine_diagnose/selectors';
import { fetchDiagnosesAll, fetchMedicinesAll } from '../../store/medicine_diagnose/actions';
import { addMedicalReport } from '../../store/medical_report/actions';


const MedicalReport = ({ typeId, medRecId }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const diagnoses = useSelector(diagnosesSelector);
    const medicines = useSelector(medicinesSelector);
    const [diagnose, setDiagnose] = useState('');
    const [medicinesSel, setMedicinesSel] = useState([]);

    useEffect(() => {
        dispatch(
            fetchDiagnosesAll({
            })
        );
        dispatch(
            fetchMedicinesAll({
                typeId
            })
        );
    }, [typeId]);

    const handleFinishApp = () => {
        dispatch(
            addMedicalReport({
                appId:typeId,
                medRecId,
                medicines:medicinesSel,
                diagnose,
                description
            })
        );
    };

    if (!isFetchDiagnosesSelector || !isFetchMedicinesSelector) {
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
                    <h3 className="border-bottom">Medical report</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Short description:</Form.Label>
                                <Form.Control as="textarea" rows="4" id="txtDescription"
                                    onChange={({ currentTarget }) => {
                                        setDescription(currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Diagnoses:</Form.Label>
                                <Form.Control as="select" onChange={({ currentTarget }) => {
                                    setDiagnose(currentTarget.value);
                                }} >
                                    <option value="none" disabled>Please choose doctor</option>
                                    {
                                        diagnoses.map((diagnose) => {
                                            return (
                                                <option key={diagnose.id} value={diagnose.id}>{diagnose.name}</option>
                                            );
                                        })
                                    }
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Medicines:</Form.Label>
                                <Form.Control as="select" multiple onChange={({ currentTarget }) => {
                                    let options = currentTarget.options;
                                    let vals = [];
                                    for (let i = 0; i < options.length; i++) {
                                        if (options[i].selected) {
                                            vals.push(options[i].value);
                                        }
                                    }
                                    setMedicinesSel(vals);
                                }} >

                                    {
                                        medicines.map((medicines) => {
                                            return (
                                                <option key={medicines.id} value={medicines.id}>{medicines.name}</option>
                                            );
                                        })
                                    }
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    For windows hold ctrl and select, for Mac hold mac (command) button and select
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Button variant="primary" onClick={handleFinishApp}>Finish</Button>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
}

export default MedicalReport;