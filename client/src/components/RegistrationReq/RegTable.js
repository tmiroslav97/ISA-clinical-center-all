import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal, Form, Spinner } from 'react-bootstrap';
import { approveRegReq, rejectRegReq } from '../../store/reg_req/actions';
import { isFetchRegReqs, regReqsDataSelector } from '../../store/reg_req/selectors';


const RegTable = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [reqId, setReqId] = useState(0);
    const [message, setMessage] = useState('');
    const regReqs = useSelector(regReqsDataSelector);
    const isFetchReqs = useSelector(isFetchRegReqs);

    const handleApprove = (regReqId) => {
        dispatch(
            approveRegReq({
                regReqId
            })
        );
    };

    const handleReject = () => {
        dispatch(
            rejectRegReq({
                reqId,
                message
            })
        );
    };

    const handleClose = () => setShow(false);
    const handleShow = (regReqId) => {
        setShow(true)
        setReqId(regReqId);
    };

    if (!isFetchReqs) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Rejected reason:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control as="textarea" rows="4" id="reason" name="txtReason"
                        onChange={({ currentTarget }) => {
                            setMessage(currentTarget.value);
                        }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => { handleReject(); handleClose() }}>
                        Send
                </Button>
                </Modal.Footer>
            </Modal>
            <Table responsive>
                <thead>
                    <tr>
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
                                    <td>{req.email}</td>
                                    <td>{req.firstName}</td>
                                    <td>{req.lastName}</td>
                                    <td>
                                        <Button variant="success" onClick={() => handleApprove(req.id)}>
                                            Approve
                                            </Button>
                                    </td>
                                    <td>
                                        <Button variant="danger" type="primary" onClick={() => handleShow(req.id)}>
                                            Refuse
                                                </Button>
                                    </td>
                                </tr>
                            );
                        })

                    }
                </tbody>
            </Table>
        </div>
    );
}

export default RegTable;