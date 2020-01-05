import {
    PUT_ROOMS_DATA, 
    PUT_IS_FETCH_ROOMS
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    rooms: [],
    isFetchRooms: false
};

const roomsReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_ROOMS_DATA]: computationFunctions.putRoomsData,
    [PUT_IS_FETCH_ROOMS]: computationFunctions.putIsFetchRooms
};

export default roomsReducer;