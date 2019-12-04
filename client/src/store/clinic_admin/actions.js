import {
    ADD_DOCTOR,
    DELETE_DOCTOR,
    FETCH_DOCTOR_DATA,
    PUT_DOCTORS_DATA
} from './constants';

export const addDoctor = payload => ({
    type: ADD_DOCTOR,
    payload
});

export const fetchDoctorData = payload => ({
    type: FETCH_DOCTOR_DATA,
    payload
});

export const putDoctorsData = payload => ({
    type: PUT_DOCTORS_DATA,
    payload
});

export const deleteDoctor = payload => ({
    type: DELETE_DOCTOR,
    payload
});
