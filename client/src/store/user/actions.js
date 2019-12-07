import {
    LOGIN,
    REGISTRATION,
    PUT_USER_DATA,
    PUT_USER_TOKEN,
    CHANGE_PASSWORD,
    SIGN_OUT
} from './constants';

export const signOut = payload => ({
    type: SIGN_OUT,
    payload
});

export const loginUser = payload => ({
    type: LOGIN,
    payload
});

export const registerUser = payload => ({
    type: REGISTRATION,
    payload
});

export const putUserData = payload => ({
    type: PUT_USER_DATA,
    payload
});

export const putUserToken = payload => ({
    type: PUT_USER_TOKEN,
    payload
});

export const changePassword = payload => ({
    type: CHANGE_PASSWORD,
    payload
});

