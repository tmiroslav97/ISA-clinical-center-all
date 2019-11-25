import {
    PUT_CCADMIN_DATA,
    FETCH_CCADMIN_DATA,
    FETCH_REG_REQS_DATA,
    PUT_REG_REQS_DATA,
    APPROVE_REG_REQ,
    REJECT_REG_REQ,
    REG_CC_ADMIN
} from './constants';


export const putCCAdminData = payload => ({
    type: PUT_CCADMIN_DATA,
    payload
});


export const fetchCCAdminData = payload => ({
    type: FETCH_CCADMIN_DATA,
    payload
});

export const fetchRegReqsData = payload => ({
    type: FETCH_REG_REQS_DATA,
    payload
});

export const putRegReqsData = payload => ({
    type: PUT_REG_REQS_DATA,
    payload
});

export const approveRegReq = payload => ({
    type: APPROVE_REG_REQ,
    payload
});

export const rejectRegReq = payload => ({
    type: REJECT_REG_REQ,
    payload
});

export const regCCAdmin = payload => ({
    type: REG_CC_ADMIN,
    payload
});