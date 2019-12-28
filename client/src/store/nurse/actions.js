import {
    FETCH_NURSE_DATA,
    PUT_NURSE_DATA,
    FETCH_RECEPIES,
    PUT_RECEPIES_DATA,
    REWRITE_RECEPIE,
} from './constants';

export const fetchRecepies = payload => ({
    type: FETCH_RECEPIES,
    payload
});

export const putRecepiesData = payload => ({
    type: PUT_RECEPIES_DATA,
    payload
});

export const rewriteRecepie = payload => ({
    type: REWRITE_RECEPIE,
    payload
});

export const fetchNurseData = payload => ({
    type: FETCH_NURSE_DATA,
    payload
});

export const putNurseData = payload => ({
    type: PUT_NURSE_DATA,
    payload
});