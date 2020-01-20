import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Button, Col, Form, Modal, Spinner, Pagination, PageItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { roomsDataSelector, isFetchRoomsSelector, pageCountSelector } from '../../store/rooms/selectors'
import { fetchRoomsData } from '../../store/rooms/actions';

const RoomAllAtOnce = ({ clinicId }) => {
    const dispatch = useDispatch();
    const rooms = useSelector(roomsDataSelector);
    const isFetchRoomsData = useSelector(isFetchRoomsSelector);
    const pageCount = useSelector(pageCountSelector);
    const [pageCnt, setPageCnt] = useState(0);

    const handleDelitingRooms = () => {
    };


    useEffect(() => {
        dispatch(
            fetchRoomsData({
                clinicId,
                pageCnt
            })
        );
    }, [pageCnt]);

    let items = [];
    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <Pagination.Item key={number} active={number == (pageCnt + 1)}>
                {number}
            </Pagination.Item>
        );
    }

    const handlePagination = (e) => {
        e.preventDefault();
        let event = e.target.text;
        if (event != undefined) {
            if (event.includes('First')) {
                setPageCnt(0);
            } else if (event.includes('Last')) {
                setPageCnt(pageCount - 1);
            } else if (event.includes('Next')) {
                if (pageCnt < pageCount - 1) {
                    setPageCnt(pageCnt + 1);
                }
            } else if (event.includes('Previous')) {
                if (pageCnt > 0) {
                    setPageCnt(pageCnt - 1);
                }
            }else{
                setPageCnt(event-1);
            }
        }
    };


    const [show1rEdit, setShow1rEdit] = useState(false);
    const [show2rAdd, setShow2rAdd] = useState(false);

    const handleClose1rEdit = () => setShow1rEdit(false);
    const handleShow1rEdit = () => setShow1rEdit(true);
    const handleClose2rAdd = () => setShow2rAdd(false);
    const handleShow2rAdd = () => setShow2rAdd(true);

    if (!isFetchRoomsData) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }

    return (
        <>
            <Modal show={show1rEdit} onHide={handleClose1rEdit} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit data:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label>Enter name of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Name " />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>Enter number of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Number " />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1rEdit}>
                        Edit
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2rAdd} onHide={handleClose2rAdd} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add data:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label>Enter name of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Name " />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>Enter number of the room:</Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Number " />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose2rAdd}>
                        Add
          </Button>
                </Modal.Footer>
            </Modal>
            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} xs={12}>
                        <h3 className="border-bottom">Examination and surgery rooms</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} xs={12}>
                        <Form>

                            <Form.Group as={Row} >

                                <Form.Label>Add new surgery room:</Form.Label>
                                <Col>
                                    <Button onClick={handleShow2rAdd}>Add </Button>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} >

                                <Form.Label>Search surgery rooms:</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Search " />
                                </Col>
                                <Col>
                                    <Button>Search</Button>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridStateRoom">
                                <Form.Label>Filter data by</Form.Label>
                                <Col>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>


                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} xs={12}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rooms.map((room, index) => {
                                        return (
                                            <tr key={room.id}>
                                                <td>{index+1}</td>
                                                <td>{room.name}</td>
                                                <td>{room.number}</td>
                                                <td>
                                                    <Button onClick={handleShow1rEdit}>Edit</Button>
                                                </td>
                                                <td>
                                                    <Button onClick={handleDelitingRooms}>Delete</Button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} xs={12}>
                        <Pagination onClick={handlePagination}>
                            <Pagination.First />
                            <Pagination.Prev />
                            {items}
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Col>
                </Row>
            </Container >
        </>
    );
}


export default RoomAllAtOnce;