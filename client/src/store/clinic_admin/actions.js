import {
    DELETE_DOCTOR,
    FETCH_DOCTOR_DATA,
    SEARCH_DOCTOR,
    FETCH_ROOMS_DATA,
    PUT_ROOMS_DATA,
    DELETE_ROOMS_DATA,
    ADD_ROOMS_DATA,
    EDIT_ROOMS_DATA,
    SEARCH_ROOMS_DATA,
    FETCH_APPOINTMENT_TYPE,
    PUT_APPOINTMENT_TYPE,
    DELETE_APPOINTMENT_TYPE,
    SEARCH_APPOINTMENT_TYPE,
    EDIT_APPOINTMENT_TYPE,
    ADD_APPOINTMENT_TYPE
} from './constants';


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


export const fetchRoomsData = payload => ({
    type: FETCH_ROOMS_DATA,
    payload
});

export const putRoomsData = payload => ({
    type: PUT_ROOMS_DATA,
    payload
});

export const deleteRoomsData = payload => ({
    type: DELETE_ROOMS_DATA,
    payload
});

export const addRoomsData = payload => ({
    type: ADD_ROOMS_DATA,
    payload
});

export const editRoomsData = payload => ({
    type: EDIT_ROOMS_DATA,
    payload
});

export const searchRoomsData = payload => ({
    type: SEARCH_ROOMS_DATA,
    payload
});

export const fetchAppointmentType = payload => ({
    type: FETCH_APPOINTMENT_TYPE,
    payload
});

export const putAppointmentType = payload => ({
    type: PUT_APPOINTMENT_TYPE,
    payload
});

export const deleteAppointmentType = payload => ({
    type: DELETE_APPOINTMENT_TYPE,
    payload
});

export const searchAppointmentType = payload => ({
    type: SEARCH_APPOINTMENT_TYPE,
    payload
});

export const editAppointmentType = payload => ({
    type: EDIT_APPOINTMENT_TYPE,
    payload
});

export const addAppointmentType = payload => ({
    type: ADD_APPOINTMENT_TYPE,
    payload
});