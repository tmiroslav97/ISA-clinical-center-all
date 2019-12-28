import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_NURSE_DATA,
    FETCH_RECEPIES,
    REWRITE_RECEPIE,
} from './constants';

import NurseService from '../../services/NurseService';

import {
    putNurseData,
    putRecepiesData,
} from './actions';


export function* rewriteRecepie() {
    const { payload } = yield take(REWRITE_RECEPIE);
    const { data } = yield call(NurseService.rewriteRecepie, payload);
    const { recepies } = yield call(NurseService.fetchRecepies, {});
    yield put(putRecepiesData(recepies));
}

export function* fetchRecepies() {
    const { payload } = yield take(FETCH_RECEPIES);
    const { recepies } = yield call(NurseService.fetchRecepies, payload);
    yield put(putRecepiesData(recepies));
}

export function* fetchNurseData() {
    const { payload } = yield take(FETCH_NURSE_DATA);
    const { data } = yield call(NurseService.fetchNurseData, payload);
    yield put(putNurseData(data));
}
