import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import regReqsReducer from './reg_req/reducer';
import cAdminReducer from './clinic_admin/reducer';
import patientReducer from './patient/reducer';
import doctorReducer from './doctor/reducer';
import patientsReducer from './patients/reducer';
import calendarReducer from './calendar/reducer';
import absenceHolidayReducer from './absence_holiday/reducer';
import prescriptionReducer from './prescriptions/reducer';
import medicineDiagnoseReducer from './medicine_diagnose/reducer';
import clinicReducer from './clinics/reducer';

const rootReducer = combineReducers({
    userReducer,
    regReqsReducer,
    patientsReducer,
    calendarReducer,
    absenceHolidayReducer,
    prescriptionReducer,
    medicineDiagnoseReducer,
    clinicReducer,
    cAdminReducer,
    patientReducer,
    doctorReducer
});


export default (state, action) => {
    return rootReducer(state, action);
};