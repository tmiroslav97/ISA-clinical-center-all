import {
    PUT_CCADMIN_DATA,
    PUT_CCADMIN_TOKEN
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data:{
        id: window.localStorage.getItem('userID'),
        firstName: '',
        lastName: '',
        email: '',
        role: window.localStorage.getItem('role'),
        predefined: false
    },
    token: window.localStorage.getItem('token')
};

const ccAdminReducer = (state = initialState, { type, payload })=>{
    if(actionHandler.hasOwnProperty(type)){
        return actionHandler[type](state,payload);
    }
    return state;
};

const actionHandler = {
    [PUT_CCADMIN_DATA]: computationFunctions.putCCAdminData,
    [PUT_CCADMIN_TOKEN]: computationFunctions.putCCAdminToken,
  };

export default ccAdminReducer;