import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_PRESCRIPTIONS,
    REWRITE_PRESCRIPTION
} from './constants';

import NurseService from '../../services/NurseService';

import {
    putIsFetchPrescriptions,
    putPrescriptionsData
} from './actions';


export function* rewritePrescription() {
    const { payload } = yield take(REWRITE_PRESCRIPTION);
    const { data } = yield call(NurseService.reweritePrescription, payload);
    put(putIsFetchPrescriptions(false));
    const { prescriptions } = yield call(NurseService.fetchPrescriptions, {});
    yield put(putPrescriptionsData(prescriptions));
    put(putIsFetchPrescriptions(true));

}

export function* fetchPrescriptions() {
    const { payload } = yield take(FETCH_PRESCRIPTIONS);
    put(putIsFetchPrescriptions(false));
    const { prescriptions } = yield call(NurseService.fetchPrescriptions, payload);
    yield put(putPrescriptionsData(prescriptions));
    put(putIsFetchPrescriptions(true));
}

