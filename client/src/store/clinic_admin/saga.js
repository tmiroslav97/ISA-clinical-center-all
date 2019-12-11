import{take, put, call} from 'redux-saga/effects';

import {
    FETCH_ROOMS_DATA,
    DELETE_ROOMS_DATA,
    ADD_ROOMS_DATA,
    SEARCH_ROOMS_DATA,
    FETCH_APPOINTMENT_TYPE,
    EDIT_APPOINTMENT_TYPE,
    EDIT_ROOMS_DATA,
    ADD_APPOINTMENT_TYPE,
    DELETE_APPOINTMENT_TYPE,
    SEARCH_APPOINTMENT_TYPE,
    ADD_DOCTOR,
    SEARCH_DOCTOR,
    FETCH_DOCTOR_DATA,
    DELETE_DOCTOR,
} from './constants';

import AppointmentTypeService from '../../services/AppointmentTypeService';
import RoomService from '../../services/RoomService';
import CAdminService from '../../services/CAdminService';

import {
    putRoomsData,
    putAppointmentType,
    putDoctorsData    
} from './actions';

export function* fetchDoctorData() {
    const { payload } = yield take(FETCH_DOCTOR_DATA);
    const { doctors } = yield call(CAdminService.fetchDoctorData, {});
    yield put(putDoctorsData(doctors));
}

export function* addDoctor() {
    const { payload } = yield take(ADD_DOCTOR);
    const { data } = yield call(CAdminService.addDoctor, payload);
    const { doctors } = yield call(CAdminService.fetchDoctorData, {});
    yield put(putDoctorsData(doctors));
}

export function* deleteDoctor() {
    const { payload } = yield take(DELETE_DOCTOR);
    const { data } = yield call(CAdminService.deleteDoctor, payload);
    const { doctors } = yield call(CAdminService.fetchDoctorData, {});
    yield put(putDoctorsData(doctors));
}
export function* searchDoctorByName() {
    const { payload } = yield take(SEARCH_DOCTOR);
    const { data } = yield call(CAdminService.searchDoctorByName, payload);
    const { doctors } = yield call(CAdminService.fetchDoctorData, {});
    yield put(putDoctorsData(doctors));
}


export function* fetchRoomsData() {
    const { payload } = yield take(FETCH_ROOMS_DATA);
    const { rooms } = yield call(RoomService.fetchRoomsData, payload);
    yield put(putRoomsData(rooms));
}

export function* deleteRoomsData(){
    const { payload } = yield take (DELETE_ROOMS_DATA);
    const { data } = yield call(RoomService.deleteRoomsData, payload);
    const { rooms } = yield call(RoomService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}
export function* addRoomsData(){
    const { payload } = yield take (ADD_ROOMS_DATA);
    const { data } = yield call(RoomService.addRoomsData, payload);
    const { rooms } = yield call(RoomService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}
export function* editRoomsData(){
    const { payload } = yield take (EDIT_ROOMS_DATA);
    const { data } = yield call(RoomService.editRoomsData, payload);
    const { rooms } = yield call(RoomService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}

export function* searchRoomsData(){
    const { payload } = yield take (SEARCH_ROOMS_DATA);
    const { data } = yield call(RoomService.searchRoomsData, payload);
    const { rooms } = yield call(RoomService.fetchRoomsData, {});
    yield put(putRoomsData(rooms));
}

export function* fetchAppointmentType() {
    const { payload } = yield take(FETCH_APPOINTMENT_TYPE);
    const { appointmentType } = yield call(AppointmentTypeService.fetchAppointmentType, payload);
    yield put(putAppointmentType(appointmentType));
}

export function* addAppointmentType(){
    const { payload } = yield take (ADD_APPOINTMENT_TYPE);
    const { data } = yield call(CAdminService.addAppointmentType, payload);
    const { appointmentType} = yield call(AppointmentTypeService.fetchAppointmentType, {});
    yield put(putAppointmentType(appointmentType));
}

export function* editAppointmentType(){
    const { payload } = yield take (EDIT_APPOINTMENT_TYPE);
    const { data } = yield call(AppointmentTypeService.editAppointmentType, payload);
    const { appointmentType} = yield call(AppointmentTypeService.fetchAppointmentType, {});
    yield put(putAppointmentType(appointmentType));
}

export function* deleteAppointmentType(){
    const { payload } = yield take (DELETE_APPOINTMENT_TYPE );
    const { data } = yield call(AppointmentTypeService.deleteAppointmentType, payload);
    const { appointmentType } = yield call(AppointmentTypeService.fetchRoomsData, {});
    yield put(putAppointmentType(appointmentType));
}
export function* searchAppointmentType(){
    const { payload } = yield take (SEARCH_APPOINTMENT_TYPE);
    const { data } = yield call(AppointmentTypeService.searchAppointmentType, payload);
    const { appointmentType } = yield call(AppointmentTypeService.fetchAppointmentType, {});
    yield put(putAppointmentType(appointmentType));
}