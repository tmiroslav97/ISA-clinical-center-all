import {
    PUT_NURSE_DATA,
    PUT_RECEPIES_DATA,
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data: {
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        role: window.localStorage.getItem('role'),
        clinicId: null
    },
    recepies: [],
};

const nurseReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_NURSE_DATA]: computationFunctions.putNurseData,
    [PUT_RECEPIES_DATA]: computationFunctions.putRecepiesData
};

export default nurseReducer;