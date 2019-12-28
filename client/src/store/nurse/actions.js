import {
    FETCH_NURSE_DATA,
    PUT_NURSE_DATA,
} from './constants';

export const fetchNurseData = payload => ({
    type: FETCH_NURSE_DATA,
    payload
});

export const putNurseData = payload => ({
    type: PUT_NURSE_DATA,
    payload
});