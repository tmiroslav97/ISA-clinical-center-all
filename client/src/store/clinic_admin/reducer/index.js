import {
    //PUT_ROOMS_DATA, 
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    rooms: []
};

const cAdminReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    //[PUT_ROOMS_DATA]: computationFunctions.putRoomsData,
};

export default cAdminReducer;