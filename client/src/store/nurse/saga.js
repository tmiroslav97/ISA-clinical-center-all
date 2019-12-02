import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_NURSE_DATA,
    FETCH_PATIENTS
} from './constants';

import PatientService from '../../services/PatientService';

import {
    putNurseData,
    putPatients
} from './actions';

export function* fetchPatients() {
    const { payload } = yield take(FETCH_PATIENTS);
    const { patients } = yield call(PatientService.fetchPatients, {});
    yield put(putPatients(patients));
}