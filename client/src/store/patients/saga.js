import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import {
    FETCH_PATIENTS_DATA
} from './constants';

import PatientService from '../../services/PatientService';

import {
    putPatientsData,
    putIsFetchPatients
} from './actions';


export function* fetchPatientsData() {
    const { payload } = yield take(FETCH_PATIENTS_DATA);
    yield put(putIsFetchPatients(false));
    const { patients } = yield call(PatientService.fetchPatientsByClinicId, payload);
    yield put(putPatientsData(patients));
    yield put(putIsFetchPatients(true));
}