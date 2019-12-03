import {
    DELETE_DOCTOR,
    FETCH_DOCTOR_DATA,
    SEARCH_DOCTOR,
    FETCH_ROOMS_DATA,
    PUT_ROOMS_DATA
} from './constants';

/*export const addDoctor = payload => ({
    type: ADD_DOCTOR,
    payload
});*/

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