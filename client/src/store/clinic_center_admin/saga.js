import { take, put, call } from 'redux-saga/effects';

import { FETCH_CCADMIN_DATA } from './constants';
import CCAdminService from '../../services/CCAdminService';

import {
    putCCAdminData,
} from './actions';

export function* fetchCCAdminData() {
    const { payload } = yield take(FETCH_CCADMIN_DATA);
    const { data } = yield call(CCAdminService.fetchCCAdminData, payload);
    yield put(putCCAdminData(data));
}