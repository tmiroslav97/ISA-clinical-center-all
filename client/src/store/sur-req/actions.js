import {
    FETCH_SUR_REQ_DATA,
    PUT_IS_FETCH_SUR_REQ_DATA,
    PUT_SUR_REQ_DATA,
    PUT_SUR_REQ_PAGE_COUNT,
    PUT_PICK_SUR_REQ
} from './constants';

export const putPickSurReq = payload => ({
    type: PUT_PICK_SUR_REQ,
    payload
});

export const putSurReqPageCount = payload => ({
    type: PUT_SUR_REQ_PAGE_COUNT,
    payload
});

export const fetchSurReqData = payload => ({
    type: FETCH_SUR_REQ_DATA,
    payload
});

export const putIsFetchSurReqData = payload => ({
    type: PUT_IS_FETCH_SUR_REQ_DATA,
    payload
});

export const putSurReqData = payload => ({
    type: PUT_SUR_REQ_DATA,
    payload
});