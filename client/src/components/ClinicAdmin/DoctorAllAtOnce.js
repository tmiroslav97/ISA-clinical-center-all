import React,{useState, useEffect} from 'react';
import { Container, Row, Form, Col, Button, Table, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {addDoctor, fetchDoctorData, deleteDoctor} from '../../store/clinic_admin/actions';
import { doctorDataSelector } from '../../store/clinic_admin/selectors';



const DoctorAllAtOnce = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const doctors = useSelector(doctorDataSelector);

    const handleAddDoctor = () => {
        dispatch(
            addDoctor({
                email,
                password,
                password2,
                firstName,
                lastName
            })
        );
    };
    const handleDeleteDoctor = () => {
        dispatch(
            deleteDoctor({
                id
            })
        );
    };
    useEffect(() => {
        dispatch(
            fetchDoctorData({})
        );
    }, []);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add data:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>E-mail address</Form.Label>
                            <Form.Control type="email" placeholder="E-mail"   onChange={({ currentTarget }) => { setEmail(currentTarget.value); }} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  onChange={({ currentTarget }) => { setPassword(currentTarget.value); }} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm your password"  onChange={({ currentTarget }) => { setPassword2(currentTarget.value); }}  />
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="First name"  onChange={({ currentTarget }) => { setFirstName(currentTarget.value); }} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Last name"  onChange={({ currentTarget }) => { setLastName(currentTarget.value); }}  />
                        </Form.Group>
                    </Form.Row>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleAddDoctor}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>


        <Container>
            <Row>
                <h3>Doctors - adding, deliting and searching</h3>
            </Row>

            <Row>
                <Form>

                    <Form.Group as={Row} >

                        <Form.Label>Add new doctor:</Form.Label>
                        <Col>
                            <Button onClick={handleShow}>Add </Button>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >

                        <Form.Label>Search doctors:</Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Search " />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formGridState">
                        <Form.Label>Filter data by</Form.Label>
                        <Col>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>


                </Form>
            </Row>

            <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                doctors.map((doctor, index) => {
                                    return (
                                        <tr key={doctor.id}>
                                            <td>{index + 1}</td>
                                            <td>{doctor.firstName}</td>
                                            <td>{doctor.lastName}</td>
                                            <td><Button variant="danger" onClick={handleDeleteDoctor} >Delete</Button></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                </Table>
            </Row>


        </Container >
        </>
    );
}

export default DoctorAllAtOnce;