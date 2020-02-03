import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_REG_REQS_DATA,
    APPROVE_REG_REQ,
    REJECT_REG_REQ,

} from './constants';

import CCAdminService from '../../services/CCAdminService';

import {
    putRegReqsData,
    putIsFetchRegReqs,
} from './actions';

import {
    putPageCnt,
    putSelPageCnt
} from '../common/actions';


export function* fetchRegReqsData() {
    const { payload } = yield take(FETCH_REG_REQS_DATA);
    yield put(putIsFetchRegReqs(false));
    const { reqData } = yield call(CCAdminService.fetchRegReqsData, payload);
    yield put(putSelPageCnt(payload.pageCnt));
    yield put(putPageCnt(reqData.regReqsPageCnt));
    yield put(putRegReqsData(reqData.reqs));
    yield put(putIsFetchRegReqs(true));
}

export function* approveRegReq() {
    const { payload } = yield take(APPROVE_REG_REQ);
    // eslint-disable-next-line
    const { data } = yield call(CCAdminService.approveRegReq, payload);
    yield put(putIsFetchRegReqs(false));
    const { reqData } = yield call(CCAdminService.fetchRegReqsData, { pageCnt: 0 });
    yield put(putSelPageCnt(0));
    yield put(putPageCnt(reqData.regReqsPageCnt));
    yield put(putRegReqsData(reqData.reqs));
    yield put(putIsFetchRegReqs(true));
}

export function* rejectRegReq() {
    const { payload } = yield take(REJECT_REG_REQ);
    // eslint-disable-next-line
    const { data } = yield call(CCAdminService.rejectRegReq, payload);
    yield put(putIsFetchRegReqs(false));
    const { reqData } = yield call(CCAdminService.fetchRegReqsData, { pageCnt: 0 });
    yield put(putSelPageCnt(0));
    yield put(putPageCnt(reqData.regReqsPageCnt));
    yield put(putRegReqsData(reqData.reqs));
    yield put(putIsFetchRegReqs(true));
}