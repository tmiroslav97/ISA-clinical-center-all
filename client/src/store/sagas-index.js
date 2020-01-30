import { all, spawn, call, put } from 'redux-saga/effects';
import flatten from 'lodash/flatten';
import { putErrorMsg } from './common/actions';
import * as userSaga from './user/saga';
import * as regReqsSaga from './reg_req/saga';
import * as patientsSaga from './patients/saga';
import * as calendarSaga from './calendar/saga';
import * as absenceHolidaySaga from './absence_holiday/saga';
import * as prescriptionSaga from './prescriptions/saga';
import * as medicineDiagnoseSaga from './medicine_diagnose/saga';
import * as clinicSaga from './clinics/saga';
import * as appointmentsSaga from './appointments/saga';
import * as doctorsSaga from './doctors/saga';
import * as roomsSaga from './rooms/saga';
import * as surReqSaga from './sur-req/saga';

export default function* rootSaga() {
  let sagas = flatten(
    [userSaga,
      regReqsSaga,
      patientsSaga,
      calendarSaga,
      absenceHolidaySaga,
      prescriptionSaga,
      medicineDiagnoseSaga,
      clinicSaga,
      appointmentsSaga,
      doctorsSaga,
      roomsSaga,
      surReqSaga]
      .map(saga => Object.keys(saga).map(sagaFunctionName => saga[sagaFunctionName]))
  );

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
          } catch (e) {
            yield put(putErrorMsg(e.message));
          }
        }
      })
    )
  );
}