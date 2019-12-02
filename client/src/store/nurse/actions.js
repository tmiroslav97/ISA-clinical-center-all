import {
    FETCH_NURSE_DATA,
    PUT_NURSE_DATA,
    FETCH_PATIENTS,
    PUT_PATIENTS
} from './constants';

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