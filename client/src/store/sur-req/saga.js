import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_SUR_REQ_DATA
} from './constants';

import SurgeryRequirementService from '../../services/SurgeryRequirementService';

import {
    putIsFetchSurReqData,
    putSurReqData,
    putSurReqPageCount
} from './actions';


export function* fetchRoomsData() {
    const { payload } = yield take(FETCH_SUR_REQ_DATA);
    yield put(putIsFetchSurReqData(false));
    const { data } = yield call(SurgeryRequirementService.fetchSurReqData, payload);
    yield put(putSurReqData(data.surgeryRequirements));
    yield put(putSurReqPageCount(data.pageCount));
    yield put(putIsFetchSurReqData(true));
}