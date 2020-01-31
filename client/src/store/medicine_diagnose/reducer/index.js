import {
    PUT_DIAGNOSE_DATA,
    PUT_MEDICINE_DATA,
    PUT_IS_FETCH_DIAGNOSE,
    PUT_IS_FETCH_MEDICINE,
    PUT_DIAGNOSE_PAGE_COUNT,
    PUT_MEDICINE_PAGE_COUNT
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    medicines: [],
    medicinePageCnt: 0,
    isFetchMedicines: false,
    diagnoses: [],
    diagnosePageCnt: 0,
    isFetchDiagnoses: false
};

const medicineDiagnoseReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_DIAGNOSE_DATA]: computationFunctions.putDiagnoseData,
    [PUT_DIAGNOSE_PAGE_COUNT]: computationFunctions.putDiagnosePageCnt,
    [PUT_IS_FETCH_DIAGNOSE]: computationFunctions.putIsFetchDiagnoses,
    [PUT_MEDICINE_DATA]: computationFunctions.putMedicineData,
    [PUT_MEDICINE_PAGE_COUNT]: computationFunctions.putMedicinePageCnt,
    [PUT_IS_FETCH_MEDICINE]: computationFunctions.putIsFetchMedicines
};

export default medicineDiagnoseReducer;