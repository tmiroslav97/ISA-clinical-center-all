import { take, put, call } from 'redux-saga/effects';

import {
    LOGIN,
    REGISTRATION,
    CHANGE_PASSWORD
} from './constants';
import authService from '../../services/AuthSecurity';

import {
    putUserData,
    putUserToken
} from './actions';

export function* registration() {
    const { payload } = yield take(REGISTRATION);
    // eslint-disable-next-line
    const { data } = yield call(authService.registration, payload);
}

export function* login() {
    const { payload } = yield take(LOGIN);
    const { data } = yield call(authService.login, payload);
    yield put(putUserData(data));
    yield put(putUserToken(data.token));
}

export function* changePassword() {
    const { payload } = yield take(CHANGE_PASSWORD);
    const { data } = yield call(authService.changePassword, payload);
    console.log(data);
}


