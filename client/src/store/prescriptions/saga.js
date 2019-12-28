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
    const { data } = yield call(NurseService.rewriteRecepie, payload);
    put(putIsFetchPrescriptions(false));
    const { recepies } = yield call(NurseService.fetchRecepies, {});
    yield put(putPrescriptionsData(recepies));
    put(putIsFetchPrescriptions(true));

}

export function* fetchPrescriptions() {
    const { payload } = yield take(FETCH_PRESCRIPTIONS);
    put(putIsFetchPrescriptions(false));
    const { recepies } = yield call(NurseService.fetchRecepies, payload);
    yield put(putPrescriptionsData(recepies));
    put(putIsFetchPrescriptions(true));
}

