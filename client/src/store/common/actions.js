import {
    PUT_SUCCESS_MSG,
    PUT_ERROR_MSG
} from './constants';

export const putSuccessMsg = payload => ({
    type: PUT_SUCCESS_MSG,
    payload
});

export const putErrorMsg = payload => ({
    type: PUT_ERROR_MSG,
    payload
});