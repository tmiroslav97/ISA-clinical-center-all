import { take, put, call } from 'redux-saga/effects';

import {
    ADD_DOCTOR,
    FETCH_DOCTORS_DATA,
    FETCH_DOCTORS_DATA_ON_CLINIC,
    SEARCH_DOCTOR,
    FETCH_DOCTORS_BY_CLINICID,
} from './constants';

import DoctorService from '../../services/DoctorService';

import {
    putIsFetchDoctors,
    putDoctorsData,
    putPageCount
} from './actions';


export function* fetchDoctorsData() {
    const { payload } = yield take(FETCH_DOCTORS_DATA);
    yield put(putIsFetchDoctors(false));
    const { doctors } = yield call(DoctorService.fetchDoctorsByClinicId,payload);
    yield put(putDoctorsData(doctors));
    yield put(putIsFetchDoctors(true));
}

export function* fetchDoctorsByClinicId() {
    //eslint-disable-next-line
    const { payload } = yield take(FETCH_DOCTORS_BY_CLINICID);
    yield put(putIsFetchDoctors(false));
    const { doctors } = yield call(DoctorService.fetchDoctorsByClinicId, payload);
    yield put(putDoctorsData(doctors));
    yield put(putIsFetchDoctors(true));
}

export function* addDoctor() {
    const { payload } = yield take(ADD_DOCTOR);
    yield put(putIsFetchDoctors(false));
    //eslint-disable-next-line
    const { data } = yield call(DoctorService.addDoctor, payload);
    const { doctors } = yield call(DoctorService.fetchDoctorsData, {});
    yield put(putDoctorsData(doctors));
    yield put(putIsFetchDoctors(true));
}

export function* searchDoctor() {
    const { payload } = yield take(SEARCH_DOCTOR);
    yield put(putIsFetchDoctors(false));
    const { data } = yield call(DoctorService.searchDoctor, payload);
    yield put(putDoctorsData(data.doctors));
    yield put(putPageCount(data.putPageCount));
    yield put(putIsFetchDoctors(true));
}