import { take, put, call } from 'redux-saga/effects';

import {
    FETCH_ROOMS_DATA
} from './constants';


import {
    putRoomsData,
    putIsFetchRooms
} from './actions';


/*export function* fetchRoomsData() {
    const { payload } = yield take(FETCH_ROOMS_DATA);
    const { rooms } = yield call(RoomService.fetchRoomsData, payload);
    yield put(putRoomsData(rooms));
}*/

/*export function* deleteRoomsData(){
    const { payload } = yield take (DELETE_ROOMS_DATA);
    const { data } = yield call(RoomService.deleteRoomsData, payload);
    const { rooms } = yield call(RoomService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}*/
/*export function* addRoomsData(){
    const { payload } = yield take (ADD_ROOMS_DATA);
    const { data } = yield call(RoomService.addRoomsData, payload);
    const { rooms } = yield call(RoomService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}*/
/*export function* editRoomsData(){
    const { payload } = yield take (EDIT_ROOMS_DATA);
    const { data } = yield call(RoomService.editRoomsData, payload);
    const { rooms } = yield call(RoomService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}*/

/*export function* searchRoomsData(){
    const { payload } = yield take (SEARCH_ROOMS_DATA);
    const { data } = yield call(RoomService.searchRoomsData, payload);
    const { rooms } = yield call(RoomService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}*/