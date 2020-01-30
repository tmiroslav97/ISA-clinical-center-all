import {
    PUT_ERROR_MSG,
    PUT_SUCCESS_MSG
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    error: null,
    success: null,
};

const msgReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_ERROR_MSG]: computationFunctions.putError,
    [PUT_SUCCESS_MSG]: computationFunctions.putSuccess,
};

export default msgReducer;