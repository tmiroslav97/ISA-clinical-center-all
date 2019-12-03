import {
    PUT_PATIENT_DATA,
    FETCH_PATIENT_DATA,
    PUT_DOCTORS_DATA,
    FETCH_DOCTORS_DATA
} from './constants';
    
export const putPatientData = payload => ({
    type: PUT_PATIENT_DATA,
    payload
});

export const fetchPatientData = payload => ({
    type: FETCH_PATIENT_DATA,
    payload
});

export const putDoctorsData = payload => ({
    type: PUT_DOCTORS_DATA,
    payload
});

export const fetchDoctorsData = payload => ({
    type: FETCH_DOCTORS_DATA,
    payload
});

