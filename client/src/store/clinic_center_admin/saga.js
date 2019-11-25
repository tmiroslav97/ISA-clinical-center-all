import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_CCADMIN_DATA,
    FETCH_REG_REQS_DATA,
    APPROVE_REG_REQ,
    REJECT_REG_REQ,
    REG_CC_ADMIN
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
    yield put(putRegReqsData(data));
}

export function* approveRegReq() {
    const { payload } = yield take(APPROVE_REG_REQ);
    // eslint-disable-next-line
    const { data } = yield call(CCAdminService.approveRegReq, payload);
}

export function* rejectRegReq() {
    const { payload } = yield take(REJECT_REG_REQ);
    // eslint-disable-next-line
    const { data } = yield call(CCAdminService.rejectRegReq, payload);
}

export function* regCCAdmin() {
    const { payload } = yield take(REG_CC_ADMIN);
    // eslint-disable-next-line
    const { data } = yield call(CCAdminService.regCCAdmin, payload);
}