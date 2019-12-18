import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Button, Modal, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegReqsData } from '../../store/reg_req/actions';
import { regReqsDataSelector, isFetchRegReqs } from '../../store/reg_req/selectors';
import RegTable from './RegTable';
import ReactPaginate from 'react-paginate';


const RegistrationAproval = () => {
    const dispatch = useDispatch();
    const isFetchRegReq = useSelector(isFetchRegReqs);
    const regReqs = useSelector(regReqsDataSelector);
    const [selected, setSelected] = useState(0);
    const [regReqsData, setRegReqsData] = useState(regReqs.slice(0 * 10, 10));

    useEffect(() => {
        dispatch(
            fetchRegReqsData({})
        );
    }, []);

    const pageCount = Math.ceil(regReqs.length / 10);

    const handlePageClick = (data) => {
        setSelected(data.selected);
        setRegReqsData(regReqs.slice(selected * 10, (selected + 1) * 10));
    };

    if (!isFetchRegReq) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    } 
    

    return (

        <Container>
            <Row>
                <h3>Approve or refuse registration requests</h3>
            </Row>
            <Row>
                <div className="commentBox">
                    <RegTable regReqs={regReqsData} selected={selected} />
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </Row>
        </Container>
    );
}

export default RegistrationAproval;