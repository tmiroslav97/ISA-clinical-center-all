import {
    PUT_CLINICS_DATA,
    PUT_IS_FETCH_CLINICS_DATA,
    PUT_PAGE_COUNT
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    clinics:[],
    isFetchClinics: false,
    pageCount: 0
};

const clinicReducer = (state = initialState, { type, payload })=>{
    if(actionHandler.hasOwnProperty(type)){
        return actionHandler[type](state,payload);
    }
    return state;
};

const actionHandler = {
    [PUT_CLINICS_DATA]: computationFunctions.putClinicsData,
    [PUT_IS_FETCH_CLINICS_DATA]: computationFunctions.putIsFetchClinicsData,
    [PUT_PAGE_COUNT]: computationFunctions.putPageCount
};

export default clinicReducer;