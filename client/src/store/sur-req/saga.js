import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import {
    FETCH_SUR_REQ_DATA,
    FETCH_PICK_SUR_ROOM,
    FETCH_PICK_DOC
} from './constants';

import SurgeryRequirementService from '../../services/SurgeryRequirementService';

import {
    putIsFetchSurReqData,
    putSurReqData,
    putSurReqPageCount,
    putPickSurReq,
    putPickedSurReq,
    putPickTerm,
    putPickedTerm,
    putPickedRoom
} from './actions';


export function* fetchSurReqs() {
    const { payload } = yield take(FETCH_SUR_REQ_DATA);
    yield put(putIsFetchSurReqData(false));
    const { data } = yield call(SurgeryRequirementService.fetchSurReqData, payload);
    yield put(putSurReqData(data.surgeryRequirements));
    yield put(putSurReqPageCount(data.pageCount));
    yield put(putIsFetchSurReqData(true));
}

export function* fetchPickSurRoom() {
    const { payload } = yield take(FETCH_PICK_SUR_ROOM);
    yield put(putPickedSurReq(payload.pickedSurReq));
    yield put(putPickSurReq(true));
    history.push('/adminc/room-search');
}

export function* fetchPickDoc() {
    const { payload } = yield take(FETCH_PICK_DOC);
    yield put(putPickedRoom(payload.pickedRoom));
    yield put(putPickedTerm(payload.pickedTerm));
    yield put(putPickTerm(true));
    history.push('/adminc/pick-doc');
}