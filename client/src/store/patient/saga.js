import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_PATIENT_DATA,
    FETCH_DOCTORS_DATA,
    FETCH_CLINICS_DATA,
    SEARCH_CLINICS_DATA,
    SEARCH_DOCTORS_DATA
} from './constants';

import PatientService from '../../services/PatientService';

import {
    putPatientData,
    putDoctorsData,
    putClinicsData
} from './actions';

export function* fetchPatientData() {
    const { payload } = yield take(FETCH_PATIENT_DATA);
    const { data } = yield call(PatientService.fetchPatientData, payload);
    yield put(putPatientData(data));
}

export function* fetchDoctorsData() {
    const {payload} = yield take(FETCH_DOCTORS_DATA);
    const {doctors} = yield call(PatientService.fetchDoctorsData, payload);
    yield put(putDoctorsData(doctors));
}

export function* fetchClinicsData() {
    const {payload} = yield take(FETCH_CLINICS_DATA);
    const {clinics} = yield call(PatientService.fetchClinicsData, payload);
    yield put(putClinicsData(clinics));
}

export function* searchClinicsData() {
    const { payload } = yield take(SEARCH_CLINICS_DATA);
    const { data } = yield call(PatientService.searchClinicsData, payload);
    const { clinics } = yield call(PatientService.searchClinicsData, {});
    yield put(putClinicsData(clinics));
}

export function* searchDoctorsData() {
    const { payload } = yield take(SEARCH_DOCTORS_DATA);
    const { data } = yield call(PatientService.searchDoctorsData, payload);
    const { doctors } = yield call(PatientService.searchDoctorsData, {});
    yield put(putClinicsData(doctors));
}
