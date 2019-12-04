import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_NURSE_DATA,
    FETCH_PATIENTS,
    ABS_HOL_REQUEST,
    PUT_ABS_HOL_REQUEST
} from './constants';

import PatientService from '../../services/PatientService';
import NurseService from '../../services/NurseService';
import PersonnelService from '../../services/PersonnelService';

import {
    putNurseData,
    putPatients,
    putAbsHolRequest
} from './actions';

export function* absHolRequest() {
    const { payload } = yield take(ABS_HOL_REQUEST);
    const { data } = yield call(PersonnelService.absHolRequest, payload);
}

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