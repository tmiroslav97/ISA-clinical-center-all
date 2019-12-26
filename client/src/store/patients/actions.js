import {
    FETCH_PATIENTS_DATA,
    PUT_PATIENTS_DATA,
    PUT_IS_FETCH_PATIENTS
} from './constants';

export const fetchPatientsData = payload => ({
    type: FETCH_PATIENTS_DATA,
    payload
});

export const putPatientsData = payload => ({
    type: PUT_PATIENTS_DATA,
    payload
});

export const putIsFetchPatients = payload => ({
    type: PUT_IS_FETCH_PATIENTS,
    payload
});
