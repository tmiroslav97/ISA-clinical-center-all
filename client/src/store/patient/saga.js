import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_PATIENT_DATA,
    FETCH_DOCTORS_DATA,
    FETCH_CLINICS_DATA_PATIENT,
    SEARCH_CLINICS_DATA_PATIENT,
    SEARCH_DOCTORS_DATA
} from './constants';

import PatientService from '../../services/PatientService';

import {
    putPatientData,
    putDoctorsData,
    putClinicsDataPatient
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


export function* fetchClinicsDataPatient() {
    const {payload} = yield take(FETCH_CLINICS_DATA_PATIENT);
    const {clinics} = yield call(PatientService.fetchClinicsDataPatient, payload);
    yield put(putClinicsDataPatient(clinics));
}



export function* searchClinicsDataPatient() {
    const { payload } = yield take(SEARCH_CLINICS_DATA_PATIENT);
    const { data } = yield call(PatientService.searchClinicsDataPatient, payload);
    const { clinics } = yield call(PatientService.searchClinicsDataPatient, {});
    yield put(putClinicsDataPatient(clinics));
}


/*
export function* searchDoctorsData() {
    const { payload } = yield take(SEARCH_DOCTORS_DATA);
    const { data } = yield call(PatientService.searchDoctorsData, payload);
    const { doctors } = yield call(PatientService.searchDoctorsData, {});
    yield put(putClinicsData(doctors));
}
*/
