import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import {
    FETCH_PATIENTS_DATA,
    FETCH_PATIENTS_DATA_BY_CLINIC_ID
} from './constants';

import PatientService from '../../services/PatientService';

import {
    putPatientsData,
    putIsFetchPatients
} from './actions';


export function* fetchPatientsDataByClinicId() {
    const { payload } = yield take(FETCH_PATIENTS_DATA_BY_CLINIC_ID);
    yield put(putIsFetchPatients(false));
    const { patients } = yield call(PatientService.fetchPatientsByClinicId, payload);
    yield put(putPatientsData(patients));
    yield put(putIsFetchPatients(true));
}