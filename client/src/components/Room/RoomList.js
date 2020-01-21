import React, { useState, useEffect } from 'react';
import useStateWithCallback from 'use-state-with-callback';
import { Container, Row, Col, Spinner, Table, Pagination, PageItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { roomsDataSelector, isFetchRoomsSelector, pageCountSelector } from '../../store/rooms/selectors';
import { fetchRoomsData, searchRoomsData } from '../../store/rooms/actions';


const RoomList = ({ clinicId, flag, name, date, cnt }) => {
    const dispatch = useDispatch();
    const rooms = useSelector(roomsDataSelector);
    const isFetchRoomsData = useSelector(isFetchRoomsSelector);
    const pageCount = useSelector(pageCountSelector);
    const [pageCnt, setPageCnt] = useState(cnt);

    useEffect(() => {
        if (flag) {
            searchRoomsData({
                name,
                date,
                clinicId,
                pageCnt
            })
        } else {
            dispatch(
                fetchRoomsData({
                    clinicId,
                    pageCnt
                })
            );
        }

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
        console.log(event);
        if (event != undefined && pageCount > 0) {
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
            } else {
                setPageCnt(event - 1);
            }
        }
    };

    if (!isFetchRoomsData) {
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
                    <h3>Rooms list</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rooms.map((room, index) => {
                                    return (
                                        <tr key={room.id}>
                                            <td>{pageCnt * 10 + index + 1}</td>
                                            <td>{room.name}</td>
                                            <td>{room.type}</td>
                                            <td>{room.roomNum}</td>
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
                    <Pagination onClick={handlePagination} className="pagination justify-content-center mb-5">
                        <Pagination.First />
                        <Pagination.Prev />
                        {items}
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
}

export default RoomList;