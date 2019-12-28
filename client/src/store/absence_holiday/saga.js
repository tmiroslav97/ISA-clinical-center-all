import { take, put, call } from 'redux-saga/effects';

import {
    ABS_HOL_REQUEST,
    FETCH_ABS_HOL_REQUESTS
} from './constants';

import PersonnelService from '../../services/PersonnelService';

import {
    putAbsHolRequest,
    putIsFetchAbsHolRequests
} from './actions';

export function* fetchAbsHolRequest() {
    const { payload } = yield take(FETCH_ABS_HOL_REQUESTS);
    yield put(putIsFetchAbsHolRequests(false));
    const { absholrequests } = yield call(PersonnelService.fetchAbsHolRequests, payload);
    yield put(putAbsHolRequest(absholrequests));
    yield put(putIsFetchAbsHolRequests(true));
}

export function* absHolRequest() {
    const { payload } = yield take(ABS_HOL_REQUEST);
    const { data } = yield call(PersonnelService.absHolRequest, payload);
    yield put(putIsFetchAbsHolRequests(false));
    const { absholrequests } = yield call(PersonnelService.fetchAbsHolRequests, payload);
    yield put(putAbsHolRequest(absholrequests));
    yield put(putIsFetchAbsHolRequests(true));
}