import { all, spawn, call, put } from 'redux-saga/effects';
import flatten from 'lodash/flatten';
import * as userSaga from './user/saga';
import * as ccAdminSaga from './clinic_center_admin/saga';
import * as nurseSaga from './nurse/saga';

export default function* rootSaga() {
  let sagas = flatten(
    //za sad prazne uglaste tu stavljamo sve "sage"
    [userSaga, ccAdminSaga, nurseSaga].map(saga => Object.keys(saga).map(sagaFunctionName => saga[sagaFunctionName]))
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