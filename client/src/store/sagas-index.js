import { all, spawn, call, put } from 'redux-saga/effects';
import flatten from 'lodash/flatten';
import * as userSaga from './user/saga';
import * as regReqsSaga from './reg_req/saga';
import * as patientSaga from './patient/saga';
import * as doctorSaga from './doctor/saga';
import * as patientsSaga from './patients/saga';
import * as calendarSaga from './calendar/saga';
import * as absenceHolidaySaga from './absence_holiday/saga';
import * as prescriptionSaga from './prescriptions/saga';
import * as medicineDiagnoseSaga from './medicine_diagnose/saga';
import * as clinicSaga from './clinics/saga';
import * as appointmentsSaga from './appointments/saga';
import * as doctorsSaga from './doctors/saga';
import * as roomsSaga from './rooms/saga';

export default function* rootSaga() {
  let sagas = flatten(
    //za sad prazne uglaste tu stavljamo sve "sage"
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
      patientSaga,
      doctorSaga]
      .map(saga => Object.keys(saga).map(sagaFunctionName => saga[sagaFunctionName]))
  );

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
          } catch (e) {
            // ovo je za error, moze se otkomentarisati u deploymentu, ali treba napraviti u store za error
            //yield put(putError(e.message));
          }
        }
      })
    )
  );
}