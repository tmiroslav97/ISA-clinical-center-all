import {
    PUT_ROOMS_DATA, 
    PUT_APPOINTMENT_TYPE
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data: {
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        role: window.localStorage.getItem('role'),
    },
    rooms: [],
    typeAppointment: [],
    doctors: []
};

const cAdminReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_ROOMS_DATA]: computationFunctions.putRoomsData,
    [PUT_APPOINTMENT_TYPE]:computationFunctions.putAppointmentType
};

export default cAdminReducer;