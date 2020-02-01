import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegReqsData } from '../../store/reg_req/actions';
import { regReqsPageCntSelector } from '../../store/reg_req/selectors';
import RegTable from './RegTable';


const RegistrationAproval = () => {
    const dispatch = useDispatch();
    const regReqsPageCnt = useSelector(regReqsPageCntSelector);
    const [pageCnt, setPageCnt] = useState(0);

    useEffect(() => {
        dispatch(
            fetchRegReqsData({ pageCnt })
        );
    }, [pageCnt]);

    let items = [];
    for (let number = 1; number <= regReqsPageCnt; number++) {
        items.push(
            <Pagination.Item key={number} active={number == (pageCnt + 1)}>
                {number}
            </Pagination.Item>
        );
    }

    const handlePagination = (e) => {
        e.preventDefault();
        let event = e.target.text;
        if (event != undefined && regReqsPageCnt > 0) {
            if (event.includes('First')) {
                setPageCnt(0);
            } else if (event.includes('Last')) {
                setPageCnt(regReqsPageCnt - 1);
            } else if (event.includes('Next')) {
                if (pageCnt < regReqsPageCnt - 1) {
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


    return (

        <Container>
            <Row>
                <h3>Approve or refuse registration requests</h3>
            </Row>
            <RegTable />
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

export default RegistrationAproval;