import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_NURSE_DATA,
    FETCH_PATIENTS
} from './constants';

import PatientService from '../../services/PatientService';
import NurseService from '../../services/NurseService';

import {
    putNurseData,
    putPatients
} from './actions';

export function* fetchNurseData() {
    const { payload } = yield take(FETCH_NURSE_DATA);
    const { data } = yield call(NurseService.fetchNurseData, payload);
    yield put(putNurseData(data));
}

export function* fetchPatients() {
    const { payload } = yield take(FETCH_PATIENTS);
    const { patients } = yield call(PatientService.fetchPatients, {});
    yield put(putPatients(patients));
}