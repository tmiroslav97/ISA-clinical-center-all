import {
    PUT_IS_FETCH_CODEBOOK,
    PUT_CODEBOOK_DATA,
    FETCH_CODEBOOK_DATA,
    ADD_CODE
} from './constants';

export const addCode = payload => ({
    type: ADD_CODE,
    payload
});

export const fetchCodebookData = payload => ({
    type: FETCH_CODEBOOK_DATA,
    payload
});

export const putCodeBookData = payload => ({
    type: PUT_CODEBOOK_DATA,
    payload
});

export const putIsFetchCodebook = payload => ({
    type: PUT_IS_FETCH_CODEBOOK,
    payload
});