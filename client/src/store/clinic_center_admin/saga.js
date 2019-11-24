import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_CCADMIN_DATA,
    FETCH_REG_REQS_DATA
} from './constants';

import CCAdminService from '../../services/CCAdminService';

import {
    putCCAdminData,
    putRegReqsData
} from './actions';

export function* fetchCCAdminData() {
    const { payload } = yield take(FETCH_CCADMIN_DATA);
    const { data } = yield call(CCAdminService.fetchCCAdminData, payload);
    yield put(putCCAdminData(data));
}

export function* fetchRegReqsData() {
    const { payload } = yield take(FETCH_REG_REQS_DATA);
    const { data } = yield call(CCAdminService.fetchRegReqsData, payload);
    console.log(data);
    yield put(putRegReqsData(data));
}