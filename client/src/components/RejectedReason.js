import React from 'react';
import {Modal, Form, Button } from 'react-bootstrap';

function RejectedReason(props){
    return(
        <Modal
        {...props}
        size="lg"
        onHide={() => setSmShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-rejection">
                Reason for rejection:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control type="text"/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Send</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RejectedReason;