import {
    PUT_CCADMIN_DATA,
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data:{
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        role: window.localStorage.getItem('role'),
        predefined: false
    }
};

const ccAdminReducer = (state = initialState, { type, payload })=>{
    if(actionHandler.hasOwnProperty(type)){
        return actionHandler[type](state,payload);
    }
    return state;
};

const actionHandler = {
    [PUT_CCADMIN_DATA]: computationFunctions.putCCAdminData,
  };

export default ccAdminReducer;