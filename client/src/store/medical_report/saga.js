import { take, put, call } from 'redux-saga/effects';
import {history} from '../../index';
import {
    ADD_MEDICAL_REPORT
} from './constants';

import MedicalReportService from '../../services/MedicalReportService';

import {

} from './actions';

export function* addMedicalReport() {
    const { payload } = yield take(ADD_MEDICAL_REPORT);
    yield call(MedicalReportService.addMedicalReport, payload);
    history.push('/doc');
}