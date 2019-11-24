import React, {useState} from 'react';
import {Container,Row,Table, Button, Modal, Form} from 'react-bootstrap';

function RegistrationAproval(){
        const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
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
                        <tr>
                        <td>1</td>
                        <td>perica@gmail.com</td>
                        <td>Aleksa</td>
                        <td>Lukic</td>
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
                        <tr>
                        <td>2</td>
                        <td>ana@yahoo.com</td>
                        <td>Ana</td>
                        <td>Banana</td>
                        <td>
                            <Button variant="success" type="submit">
                                Approve
                            </Button>
                        </td>
                        <td>
                            <Button variant="danger" type="submit" onClick={handleShow} >
                                Refuse
                            </Button>
                        </td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>top@gmail.com</td>
                        <td>Marko</td>
                        <td>Tot</td>
                        <td>
                            <Button variant="success" type="submit" >
                                Approve
                            </Button>
                        </td>
                        <td>
                            <Button variant="danger" type="submit" onClick={handleShow} >
                                Refuse
                                
                            </Button>
                            
                        </td>
                        </tr>
                    </tbody>
                </Table>
                
            </Row>
        </Container>
        </>
    );
}

export default RegistrationAproval;