import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegReqsData } from '../../store/clinic_center_admin/actions';
import { regReqsDataSelector } from '../../store/clinic_center_admin/selectors';

function RegistrationAproval() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const regReqs = useSelector(regReqsDataSelector);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(
            fetchRegReqsData({})
        );
    }, []);

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Rejected reason:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control as="textarea" rows="4" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Send
          </Button>
                </Modal.Footer>
            </Modal>
            <Container>
                <Row>
                    <h3>Approve or refuse registration requests</h3>
                </Row>
                <Row>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>E-mail</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Approve</th>
                                <th>Refuse</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                regReqs.map((req, index) => {
                                    return (
                                        <tr key={req.id}>
                                            <td>{index + 1}</td>
                                            <td>{req.email}</td>
                                            <td>{req.firstName}</td>
                                            <td>{req.lastName}</td>
                                            <td>
                                                <Button variant="success" type="submit">
                                                    Approve
                                                </Button>
                                            </td>
                                            <td>
                                                <Button variant="danger" type="primary" onClick={handleShow}  >
                                                    Refuse
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>

                </Row>
            </Container>
        </div>
    );
}

export default RegistrationAproval;