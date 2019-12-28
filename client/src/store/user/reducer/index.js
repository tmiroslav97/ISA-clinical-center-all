import {
    PUT_USER_DATA,
    PUT_USER_TOKEN,
    PUT_CLINICS_DATA
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data:{
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        firstLog: true,
        role: localStorage.getItem('role')
    },
    token: window.localStorage.getItem('token')
};

const userReducer = (state = initialState, { type, payload })=>{
    if(actionHandler.hasOwnProperty(type)){
        return actionHandler[type](state,payload);
    }
    return state;
};

const actionHandler = {
    [PUT_USER_DATA]: computationFunctions.putUserData,
    [PUT_USER_TOKEN]: computationFunctions.putUserToken,
    [PUT_CLINICS_DATA]: computationFunctions.putClinicsData
  };

export default userReducer;