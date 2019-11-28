import {
    ADD_DOCTOR,
    DELETE_DOCTOR,
    FETCH_DOCTOR_DATA,
    SEARCH_DOCTOR
} from './constants';

export const addDoctor = payload => ({
    type: ADD_DOCTOR,
    payload
});

export const fetchDoctorData = payload => ({
    type: FETCH_DOCTOR_DATA,
    payload
});

export const deleteDoctor = payload => ({
    type: DELETE_DOCTOR,
    payload
});

export const searchDoctor = payload => ({
    type: SEARCH_DOCTOR,
    payload
});