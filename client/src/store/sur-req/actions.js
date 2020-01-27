import {
    FETCH_SUR_REQ_DATA,
    PUT_IS_FETCH_SUR_REQ_DATA,
    PUT_SUR_REQ_DATA,
    PUT_SUR_REQ_PAGE_COUNT,
    PUT_PICK_SUR_REQ,
    PUT_PICKED_SUR_REQ,
    FETCH_PICK_SUR_ROOM
} from './constants';

export const fetchPickSurRoom = payload => ({
    type: FETCH_PICK_SUR_ROOM,
    payload
});

export const putPickedSurReq = payload => ({
    type: PUT_PICKED_SUR_REQ,
    payload
});

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