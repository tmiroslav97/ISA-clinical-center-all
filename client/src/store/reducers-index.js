import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import regReqsReducer from './reg_req/reducer';
import cAdminReducer from './clinic_admin/reducer';
import patientReducer from './patient/reducer';
import nurseReducer from './nurse/reducer';
import doctorReducer from './doctor/reducer';
import patientsReducer from './patients/reducer';
import calendarReducer from './calendar/reducer';
import absenceHolidayReducer from './absence_holiday/reducer';

const rootReducer = combineReducers({
    userReducer,
    regReqsReducer,
    patientsReducer,
    calendarReducer,
    absenceHolidayReducer,
    cAdminReducer,
    patientReducer,
    nurseReducer,
    doctorReducer
});


export default (state, action) => {
    return rootReducer(state, action);
};