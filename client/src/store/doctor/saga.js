import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_DOCTOR_DATA
} from './constants';

import {
    putDoctorData
} from './actions';

import DoctorService from '../../services/DoctorService';
import PersonnelService from '../../services/PersonnelService';

export function* fetchDoctorData() {
    const { payload } = yield take(FETCH_DOCTOR_DATA);
    const { data } = yield call(DoctorService.fetchDoctorData, payload);
    yield put(putDoctorData(data));
}