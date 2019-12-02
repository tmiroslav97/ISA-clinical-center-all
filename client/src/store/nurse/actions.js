import {
    FETCH_NURSE_DATA,
    FETCH_PATIENTS
} from './constants';

export const fetchNurseData = payload => ({
    type: FETCH_NURSE_DATA,
    payload
});

export const fetchPatients = payload => ({
    type: FETCH_PATIENTS,
    payload
});