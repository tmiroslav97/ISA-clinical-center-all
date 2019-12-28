import {
    PUT_CODEBOOK_DATA,
    PUT_IS_FETCH_CODEBOOK
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    codebook:[],
    isFetchCodebook: false
};

const medicineDiagnoseReducer = (state = initialState, { type, payload })=>{
    if(actionHandler.hasOwnProperty(type)){
        return actionHandler[type](state,payload);
    }
    return state;
};

const actionHandler = {
    [PUT_CODEBOOK_DATA]: computationFunctions.putMedicineRecordData,
    [PUT_IS_FETCH_CODEBOOK]: computationFunctions.putIsFetchCodebook
  };

export default medicineDiagnoseReducer;