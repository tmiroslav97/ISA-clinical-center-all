import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import {
    FETCH_CODEBOOK_DATA,
    ADD_CODE
} from './constants';

import MedDiagService from '../../services/MedDiagService';


import {
    putCodeBookData,
    putIsFetchCodebook
} from './actions';


export function* fetchCodebookData() {
    const { payload } = yield take(FETCH_CODEBOOK_DATA);
    yield put(putIsFetchCodebook(false));
    const { codebook } = yield call(MedDiagService.fetchCodebook, payload);
    yield put(putCodeBookData(codebook));
    yield put(putIsFetchCodebook(true));
}

export function* addCode() {
    const { payload } = yield take(ADD_CODE);
    const { data } = yield call(MedDiagService.addCode, payload);
    yield put(putIsFetchCodebook(false));
    const { codebook } = yield call(MedDiagService.fetchCodebook, payload);
    yield put(putCodeBookData(codebook));
    yield put(putIsFetchCodebook(true));
}



