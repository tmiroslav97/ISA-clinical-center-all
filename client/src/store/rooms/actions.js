import {
    FETCH_ROOMS_DATA,
    PUT_ROOMS_DATA,
    PUT_IS_FETCH_ROOMS,
    //DELETE_ROOMS_DATA,
    //ADD_ROOMS_DATA,
    //EDIT_ROOMS_DATA,
    SEARCH_ROOMS_DATA
} from './constants';


export const fetchRoomsData = payload => ({
    type: FETCH_ROOMS_DATA,
    payload
});

export const putRoomsData = payload => ({
    type: PUT_ROOMS_DATA,
    payload
});

export const putIsFetchRooms = payload => ({
    type: PUT_IS_FETCH_ROOMS,
    payload
});

export const searchRoomsData = payload => ({
    type: SEARCH_ROOMS_DATA,
    payload
});

 /*
export const deleteRoomsData = payload => ({
    type: DELETE_ROOMS_DATA,
    payload
});

export const addRoomsData = payload => ({
    type: ADD_ROOMS_DATA,
    payload
});

export const editRoomsData = payload => ({
    type: EDIT_ROOMS_DATA,
    payload
});


*/