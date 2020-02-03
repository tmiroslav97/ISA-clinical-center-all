import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_MEDICAL_RECORD,
    FETCH_MEDICAL_RECORD_BY_APP,
    EDIT_MEDICAL_RECORD
} from './constants';

import MedicalRecordService from '../../services/MedicalRecordService';

import {
    putIsFetchMedicalRecord,
    putMedicalRecord
} from './actions';

export function* editMedicalRecord() {
    const { payload } = yield take(EDIT_MEDICAL_RECORD);
    yield call(MedicalRecordService.editMedicalRecord, payload);
    yield put(putIsFetchMedicalRecord(false));
    const { data } = yield call(MedicalRecordService.fetchMedicalRecord, payload);
    yield put(putMedicalRecord(data));
    yield put(putIsFetchMedicalRecord(true));
}

export function* fetchMedicalRecord() {
    const { payload } = yield take(FETCH_MEDICAL_RECORD);
    yield put(putIsFetchMedicalRecord(false));
    const { data } = yield call(MedicalRecordService.fetchMedicalRecord, payload);
    yield put(putMedicalRecord(data));
    yield put(putIsFetchMedicalRecord(true));
}

export function* fetchMedicalRecordByApp() {
    const { payload } = yield take(FETCH_MEDICAL_RECORD_BY_APP);
    yield put(putIsFetchMedicalRecord(false));
    const { data } = yield call(MedicalRecordService.fetchMedicalRecordByApp, payload);
    yield put(putMedicalRecord(data));
    yield put(putIsFetchMedicalRecord(true));
}