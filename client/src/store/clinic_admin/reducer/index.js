import {
    PUT_ADDED_DOCTOR, 
    ADD_DOCTOR
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
    exeminationRoom: [],
    typeAppointment: [],
    doctors: []
};

const CAdminReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [ADD_DOCTOR]: computationFunctions.putAddedDoctor
};

export default cAdminReducer;