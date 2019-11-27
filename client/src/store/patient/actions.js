import {
    PUT_PATIENT_DATA,
    FETCH_PATIENT_DATA
} from './constants';
    
export const putPatientData = payload => ({
    type: PUT_PATIENT_DATA,
    payload
});

export const fetchPatientData = payload => ({
    type: FETCH_PATIENT_DATA,
    payload
});

