import{take, put, call} from 'redux-saga/effects';

import {
    FETCH_ROOMS_DATA,
    DELETE_ROOMS_DATA,
    ADD_ROOMS_DATA,
    SEARCH_ROOMS_DATA
} from './constants';



import CAdminService from '../../services/RoomService';

import {
    putRoomsData
} from './actions';

export function* fetchRoomsData() {
    const { payload } = yield take(FETCH_ROOMS_DATA);
    const { rooms } = yield call(CAdminService.fetchRoomsData, payload);
    yield put(putRoomsData(rooms));
}

export function* deleteRoomsData(){
    const { payload } = yield take (DELETE_ROOMS_DATA);
    const { data } = yield call(CAdminService.deleteRoomsData, payload);
    const { rooms } = yield call(CAdminService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}
export function* addRoomsData(){
    const { payload } = yield take (ADD_ROOMS_DATA);
    const { data } = yield call(CAdminService.addRoomsData, payload);
    const { rooms } = yield call(CAdminService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}

export function* searchRoomsData(){
    const { payload } = yield take (SEARCH_ROOMS_DATA);
    const { data } = yield call(CAdminService.searchRoomsData, payload);
    const { rooms } = yield call(CAdminService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}

