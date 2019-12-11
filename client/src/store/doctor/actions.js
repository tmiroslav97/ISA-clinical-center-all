import {
    FETCH_DOCTOR_DATA,
    PUT_DOCTOR_DATA
} from './constants';

export const fetchDoctorData = payload => ({
    type: FETCH_DOCTOR_DATA,
    payload
});

export const putDoctorData = payload => ({
    type: PUT_DOCTOR_DATA,
    payload
});