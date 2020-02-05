import {
    PUT_APPOINTMENT_TYPES,
    FETCH_APPOINTMENT_TYPE,
    DELETE_APPOINTMENT_TYPE,
    ADD_APPOINTMENT_TYPE,
    EDIT_APPOINTMENT_TYPE,
    PUT_IS_FETCH_APPOINTMENT_TYPES,
    SEARCH_APPOINTMENT_TYPE
} from './constants';

export const fetchAppointmentType = payload => ({
    type: FETCH_APPOINTMENT_TYPE,
    payload
});

export const putAppointmentTypes = payload => ({
    type: PUT_APPOINTMENT_TYPES,
    payload
});

export const putIsFetchAppointmentTypes = payload => ({
    type: PUT_IS_FETCH_APPOINTMENT_TYPES,
    payload
});

export const addAppointmentType = payload => ({
    type: ADD_APPOINTMENT_TYPE,
    payload
});

export const deleteAppointmentType = payload => ({
    type: DELETE_APPOINTMENT_TYPE,
    payload
});

export const editAppointmentType = payload => ({
    type: EDIT_APPOINTMENT_TYPE,
    payload
});

export const searchAppointmentType = payload => ({
    type: SEARCH_APPOINTMENT_TYPE,
    payload
});