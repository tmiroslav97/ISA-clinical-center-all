import {
    PUT_CCADMIN_DATA,
    FETCH_CCADMIN_DATA,
    FETCH_REG_REQS_DATA,
    PUT_REG_REQS_DATA
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