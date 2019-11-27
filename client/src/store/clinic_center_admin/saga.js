import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_CCADMIN_DATA,
    FETCH_REG_REQS_DATA,
    APPROVE_REG_REQ,
    REJECT_REG_REQ,
    REG_CC_ADMIN,
    REG_CLINIC,
    FETCH_CLINICS_DATA
} from './constants';

import CCAdminService from '../../services/CCAdminService';

import {
    putCCAdminData,
    putRegReqsData,
    putClinicsData
} from './actions';


export function* fetchClinicsData() {
    const { payload } = yield take(FETCH_CLINICS_DATA);
    const { clinics } = yield call(CCAdminService.fetchClinicsData, payload);
    yield put(putClinicsData(clinics));
}

export function* regClinic() {
    const { payload } = yield take(REG_CLINIC);
    const { data } = yield call(CCAdminService.regClinic, payload);
    const { clinics } = yield call(CCAdminService.fetchClinicsData, {});
    yield put(putClinicsData(clinics))
}

export function* fetchCCAdminData() {
    const { payload } = yield take(FETCH_CCADMIN_DATA);
    const { data } = yield call(CCAdminService.fetchCCAdminData, payload);
    yield put(putCCAdminData(data));
}

export function* fetchRegReqsData() {
    const { payload } = yield take(FETCH_REG_REQS_DATA);
    const { reqData } = yield call(CCAdminService.fetchRegReqsData, payload);
    yield put(putRegReqsData(reqData));
}

export function* approveRegReq() {
    const { payload } = yield take(APPROVE_REG_REQ);
    // eslint-disable-next-line
    const { data } = yield call(CCAdminService.approveRegReq, payload);
    const { reqData } = yield call(CCAdminService.fetchRegReqsData, {});
    yield put(putRegReqsData(reqData));
}

export function* rejectRegReq() {
    const { payload } = yield take(REJECT_REG_REQ);
    // eslint-disable-next-line
    const { data } = yield call(CCAdminService.rejectRegReq, payload);
    const { reqData } = yield call(CCAdminService.fetchRegReqsData, {});
    yield put(putRegReqsData(reqData));
}


export function* regCCAdmin() {
    const { payload } = yield take(REG_CC_ADMIN);
    // eslint-disable-next-line
    const { data } = yield call(CCAdminService.regCCAdmin, payload);
}