import {
    PUT_DOCTORS_DATA,
    PUT_IS_FETCH_DOCTORS_DATA
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    doctors: [],
    isFetchDoctors: false
};

const doctorsReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_DOCTORS_DATA]: computationFunctions.putDoctorsData,
    [PUT_IS_FETCH_DOCTORS_DATA]: computationFunctions.putIsFetchDoctors,
};

export default doctorsReducer;