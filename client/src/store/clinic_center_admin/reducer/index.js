import {
    PUT_CCADMIN_DATA,
    PUT_REG_REQS_DATA,
    PUT_CLINICS_DATA,
    PUT_MEDICINE_DATA
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    data: {
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        role: window.localStorage.getItem('role'),
        predefined: false
    },
    reqs: [],
    clinics: [],
    medicines: []
};

const ccAdminReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_CCADMIN_DATA]: computationFunctions.putCCAdminData,
    [PUT_REG_REQS_DATA]: computationFunctions.putRegReqsData,
    [PUT_CLINICS_DATA]: computationFunctions.putClinicsData,
    [PUT_MEDICINE_DATA]: computationFunctions.putMedicineData
};

export default ccAdminReducer;