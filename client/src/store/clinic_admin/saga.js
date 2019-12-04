import{take, put, call} from 'redux-saga/effects';

import {
    ADD_DOCTOR,
    FETCH_DOCTOR_DATA,
    DELETE_DOCTOR
} from './constants';



import CAdminService from '../../services/CAdminService';

import {
    addDoctor,
    putDoctorsData
} from './actions';

export function* fetchDoctorData() {
    const { payload } = yield take(FETCH_DOCTOR_DATA);
    const { doctors } = yield call(CAdminService.fetchDoctorData, {});
    yield put(putDiagnoseData(doctors));
}

export function* addDoctor() {
    const { payload } = yield take(ADD_DOCTOR);
    const { data } = yield call(CAdminService.addDoctor, payload);
    const { doctors } = yield call(CAdminService.fetchDoctorData, {});
    yield put(putDoctorsData(doctors));
}

export function* deleteDoctor() {
    const { payload } = yield take(DELETE_DOCTOR);
    const { data } = yield call(CAdminService.deleteDoctor, payload);
    const { doctors } = yield call(CAdminService.fetchDoctorData, {});
    yield put(putDoctorsData(doctors));
}






