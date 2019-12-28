import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_NURSE_DATA,
} from './constants';

import NurseService from '../../services/NurseService';

import {
    putNurseData,
} from './actions';


export function* fetchNurseData() {
    const { payload } = yield take(FETCH_NURSE_DATA);
    const { data } = yield call(NurseService.fetchNurseData, payload);
    yield put(putNurseData(data));
}
