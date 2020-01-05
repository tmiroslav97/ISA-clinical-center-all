import {
   // DELETE_DOCTOR,
    FETCH_DOCTORS_DATA,
    PUT_DOCTOR_DATA,
    ADD_DOCTOR,
    //SEARCH_DOCTOR,
    //FETCH_ROOMS_DATA,
    //PUT_ROOMS_DATA,
    //DELETE_ROOMS_DATA,
    //ADD_ROOMS_DATA,
    //EDIT_ROOMS_DATA,
    //SEARCH_ROOMS_DATA,
    //FETCH_APPOINTMENT_TYPE,
    //PUT_APPOINTMENT_TYPE,
    //DELETE_APPOINTMENT_TYPE,
    //SEARCH_APPOINTMENT_TYPE,
    //EDIT_APPOINTMENT_TYPE,
    //ADD_APPOINTMENT_TYPE,
    
} from './constants';


export const putDoctorData = payload => ({
    type: PUT_DOCTOR_DATA,
    payload
});

export const fetchDoctorsData = payload => ({
    type: FETCH_DOCTORS_DATA,
    payload
});

export const addDoctor = payload => ({
    type: ADD_DOCTOR,
    payload
});

/*
export const deleteDoctor = payload => ({
    type: DELETE_DOCTOR,
    payload
});



export const searchDoctorByName = payload => ({
    type:SEARCH_DOCTOR,
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

*/
