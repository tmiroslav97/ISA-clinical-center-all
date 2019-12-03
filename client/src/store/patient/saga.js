import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_PATIENT_DATA,
    FETCH_DOCTORS_DATA
} from './constants';

import PatientService from '../../services/PatientService';

import {
    putPatientData,
    putDoctorsData
} from './actions';

export function* fetchDoctorsData() {
    const {payload} = yield take(FETCH_DOCTORS_DATA);
    const {doctors} = yield call(PatientService.fetchDoctorsData, payload);
    yield put(putDoctorsData(doctors));
}

