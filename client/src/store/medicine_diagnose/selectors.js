const reducer = 'medicineDiagnoseReducer';

export const diagnosesSelector = state => state[reducer].diagnoses;
export const diagnosePageCntSelector = state => state[reducer].diagnosePageCnt;
export const isFetchDiagnosesSelector = state => state[reducer].isFetchDiagnoses;
export const medicinesSelector = state => state[reducer].diagnoses;
export const medicinePageCntSelector = state => state[reducer].medicinePageCnt;
export const isFetchMedicinesSelector = state => state[reducer].isFetchMedicines;