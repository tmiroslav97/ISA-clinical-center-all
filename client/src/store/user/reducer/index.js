import {
    PUT_USER_DATA,
    PUT_USER_TOKEN
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data:{
        id: window.localStorage.getItem('userID'),
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        country: '',
        city: '',
        phoneNum: '',
        role: window.localStorage.getItem('role')
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
  };

export default userReducer;