import {
    PUT_NURSE_DATA,
    PUT_PATIENTS,
    PUT_ABS_HOL_REQUEST
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
    patients: [],
    absholrequests: []
};

const nurseReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_NURSE_DATA]: computationFunctions.putNurseData,
    [PUT_PATIENTS]: computationFunctions.putPatients,
    [PUT_ABS_HOL_REQUEST]: computationFunctions.putAbsHolRequest
};

export default nurseReducer;