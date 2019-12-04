import {
    FETCH_NURSE_DATA,
    PUT_NURSE_DATA,
    FETCH_PATIENTS,
    PUT_PATIENTS,
    ABS_HOL_REQUEST,
    PUT_ABS_HOL_REQUEST,
    FETCH_ABS_HOL_REQUEST
} from './constants';

export const fetchAbsHolRequest = payload => ({
    type: FETCH_ABS_HOL_REQUEST,
    payload
});

export const absHolRequest = payload => ({
    type: ABS_HOL_REQUEST,
    payload
});

export const putAbsHolRequest = payload => ({
    type: PUT_ABS_HOL_REQUEST,
    payload
});

export const fetchNurseData = payload => ({
    type: FETCH_NURSE_DATA,
    payload
});

export const putNurseData = payload => ({
    type: PUT_NURSE_DATA,
    payload
});

export const fetchPatients = payload => ({
    type: FETCH_PATIENTS,
    payload
});

export const putPatients = payload => ({
    type: PUT_PATIENTS,
    payload
});