import {
    PUT_PATIENT_DATA,
    PUT_DOCTORS_DATA
} from '../constants';

import * as computationFunctions from './computation-functions';


    const initialState = {
    data: {
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: '',
        city: '',
        phoneNum: '',
        unoip: '',
        role: window.localStorage.getItem('role'),

    },
    doctors:[]
};

const patientReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    //[PUT_PATIENT_DATA]: computationFunctions.putPatientData,
    [PUT_DOCTORS_DATA]: computationFunctions.putDoctorsData
};

export default patientReducer;