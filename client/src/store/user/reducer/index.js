import {
    PUT_USER_DATA,
    PUT_USER_TOKEN,
    PUT_IS_FETCH_USER_DATA
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data: {
        id: window.localStorage.getItem('userID'),
        firstName: '',
        lastName: '',
        email: window.localStorage.getItem('email'),
        firstLog: true,
        role: localStorage.getItem('role')
    },
    token: window.localStorage.getItem('token'),
    isFetchUserData: false
};

const userReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_USER_DATA]: computationFunctions.putUserData,
    [PUT_USER_TOKEN]: computationFunctions.putUserToken,
    [PUT_IS_FETCH_USER_DATA]: computationFunctions.putIsFetchUserData
};

export default userReducer;