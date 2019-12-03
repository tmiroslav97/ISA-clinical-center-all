import React from 'react';
import {Container, Row, Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {roomsDataSelector} from '../../store/clinic_admin/selectors'

const RoomAllAtOnce = () => {
    const dispatch = useDispatch();
    const rooms = useSelector (roomsDataSelector);

    const handleDelitingRooms = () => {
        dispatch(
           
        );
    };

    return(
        <Container>
            <Row>
                <h3>Exemination and surgery room - adding, deliting, editing and searching</h3>
            </Row>
            <Row>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Date</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                            }
                        </tbody>
                    </Table>
            </Row>
        </Container>
    );
}


export default RoomAllAtOnce;