import {
  
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    medicalReport: null,
    isFetchMedicalReport: false
};

const medicalReportReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {

};

export default medicalReportReducer;