import{take, put, call} from 'redux-saga/effects';

import {
    ADD_DOCTOR,
    FETCH_ROOMS_DATA,
    PUT_ROOMS_DATA
} from './constants';



import CAdminService from '../../services/RoomService';

import {
    addDoctor,
    putDocData,
    putRoomsData
} from './actions';

export function* fetchRoomsData() {
    const { payload } = yield take(FETCH_ROOMS_DATA);
    const { rooms } = yield call(CAdminService.fetchRoomsData, payload);
    yield put(putRoomsData(rooms));
}




