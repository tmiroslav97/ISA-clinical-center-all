import { LOGIN, REGISTRATION } from './constants';

export const loginUser = payload => ({
    type: LOGIN,
    payload
});

export const registerUser = payload => ({
    type: REGISTRATION,
    payload
});