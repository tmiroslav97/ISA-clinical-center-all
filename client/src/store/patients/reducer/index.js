import {
    PUT_PATIENTS_DATA,
    PUT_IS_FETCH_PATIENTS
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    patients:[],
    isFetchPatients:false
};

const patientsReducer = (state = initialState, { type, payload })=>{
    if(actionHandler.hasOwnProperty(type)){
        return actionHandler[type](state,payload);
    }
    return state;
};

const actionHandler = {
    [PUT_PATIENTS_DATA]: computationFunctions.putPatientsData,
    [PUT_IS_FETCH_PATIENTS]: computationFunctions.putIsFetchPatients
  };

export default patientsReducer;