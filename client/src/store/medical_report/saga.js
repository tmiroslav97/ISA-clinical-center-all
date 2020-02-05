import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';
import {
    ADD_MEDICAL_REPORT
} from './constants';

import MedicalReportService from '../../services/MedicalReportService';

import {

} from './actions';

import {
    putSuccessMsg,
    putErrorMsg
} from '../common/actions';

export function* addMedicalReport() {
    const { payload } = yield take(ADD_MEDICAL_REPORT);
    const { data } = yield call(MedicalReportService.addMedicalReport, payload);
    if (data === 'Appointment finished') {
        yield put(putSuccessMsg(data));
        yield put(putSuccessMsg(null));
    } else {
        yield put(putErrorMsg(data));
        yield put(putErrorMsg(null));
    }
    history.push('/doc');
}