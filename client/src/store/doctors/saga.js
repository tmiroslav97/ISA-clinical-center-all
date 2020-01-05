import { take, put, call } from 'redux-saga/effects';

import {
    ADD_DOCTOR,
    FETCH_DOCTORS_DATA,
} from './constants';

import DoctorService from '../../services/DoctorService';

import {
    putIsFetchDoctors,
    putDoctorsData,
} from './actions';


export function* fetchDoctorsData() {
    const { payload } = yield take(FETCH_DOCTORS_DATA);
    yield put(putIsFetchDoctors(false));
    const { doctors } = yield call(DoctorService.fetchDoctorsData, {});
    console.log(doctors);
    yield put(putDoctorsData(doctors));
    yield put(putIsFetchDoctors(true));
}

export function* addDoctor() {
    const { payload } = yield take(ADD_DOCTOR);
    yield put(putIsFetchDoctors(false));
    const { data } = yield call(DoctorService.addDoctor, payload);
    const { doctors } = yield call(DoctorService.fetchDoctorsData, {});
    yield put(putDoctorsData(doctors));
    yield put(putIsFetchDoctors(true));
}