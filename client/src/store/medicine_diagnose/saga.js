import { take, put, call, select } from 'redux-saga/effects';

import {
    FETCH_MEDICINE_DATA,
    FETCH_DIAGNOSE_DATA,
    ADD_MEDICINE,
    ADD_DIAGNOSE,
    FETCH_MEDICINES_ALL,
    FETCH_DIAGNOSES_ALL
} from './constants';

import MedDiagService from '../../services/MedDiagService';

import {
    putDiagnoseData,
    putIsFetchDiagnose,
    putDiagnosePageCount,
    putMedicineData,
    putMedicinePageCount,
    putIsFetchMedicine
} from './actions';

export function* fetchMedicinesAll() {
    const { payload } = yield take(FETCH_MEDICINES_ALL);
    yield put(putIsFetchMedicine(false));
    const { medicines } = yield call(MedDiagService.fetchMedicineAll, payload);
    yield put(putMedicineData(medicines));
    yield put(putIsFetchMedicine(true));
}

export function* fetchDiagnosesAll() {
    const { payload } = yield take(FETCH_DIAGNOSES_ALL);
    yield put(putIsFetchDiagnose(false));
    const { diagnoses } = yield call(MedDiagService.fetchDiagnoseAll, payload);
    yield put(putDiagnoseData(diagnoses));
    yield put(putIsFetchDiagnose(true));
}

export function* fetchMedicineData() {
    const { payload } = yield take(FETCH_MEDICINE_DATA);
    yield put(putIsFetchMedicine(false));
    const { medicines } = yield call(MedDiagService.fetchMedicineData, payload);
    yield put(putMedicineData(medicines.medicines));
    yield put(putMedicinePageCount(medicines.medicinePageCnt));
    yield put(putIsFetchMedicine(true));
}

export function* fetchDiagnoseData() {
    const { payload } = yield take(FETCH_DIAGNOSE_DATA);
    yield put(putIsFetchDiagnose(false));
    const { diagnoses } = yield call(MedDiagService.fetchDiagnoseData, payload);
    yield put(putDiagnoseData(diagnoses.diagnoses));
    yield put(putDiagnosePageCount(diagnoses.medicinePageCnt));
    yield put(putIsFetchDiagnose(true));
}

export function* addMedicine() {
    const { payload } = yield take(ADD_MEDICINE);
    const { data } = yield call(MedDiagService.addMedicine, payload);
    yield put(putIsFetchMedicine(false));
    const { medicines } = yield call(MedDiagService.fetchMedicineData, { pageCnt: 0 });
    yield put(putMedicineData(medicines.medicines));
    yield put(putMedicinePageCount(medicines.medicinePageCnt));
    yield put(putIsFetchMedicine(true));
}

export function* addDiagnose() {
    const { payload } = yield take(ADD_DIAGNOSE);
    const { data } = yield call(MedDiagService.addDiagnose, payload);
    yield put(putIsFetchDiagnose(false));
    const { diagnoses } = yield call(MedDiagService.fetchDiagnoseData, { pageCnt: 0 });
    yield put(putDiagnoseData(diagnoses.diagnoses));
    yield put(putDiagnosePageCount(diagnoses.medicinePageCnt));
    yield put(putIsFetchDiagnose(true));
}