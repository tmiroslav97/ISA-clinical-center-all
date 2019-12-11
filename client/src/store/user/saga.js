import { take, put, call } from 'redux-saga/effects';
import { history } from '../../index';

import {
    LOGIN,
    REGISTRATION,
    CHANGE_PASSWORD,
    SIGN_OUT
} from './constants';
import authService from '../../services/AuthSecurity';

import {
    putUserData,
    putUserToken
} from './actions';

export function* signOut() {
    const { payload } = yield take(SIGN_OUT);
    localStorage.clear();
    yield put(putUserData(payload));
    yield put(putUserToken(''));
    history.push('/');
}

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
    if (data.role === 'ROLE_PATIENT') {
        history.push('/pat');
    } else if (data.role === 'ROLE_CCADMIN') {
        if (data.firstLog) {
            history.push('/change-pass');
        } else {
            history.push('/ccadmin/' + data.id);
        }

    } else if (data.role === 'ROLE_DOCTOR') {
        history.push('/doc/'+data.id);
    } else if (data.role === 'ROLE_NURSE') {
        history.push('/nurse-page/' + data.id);
    } else if (data.role === 'ROLE_ADMINC') {
        history.push('/adminc');
    } else {
        alert('Nije odobren pristup sistemu!');
    }
}

export function* changePassword() {
    const { payload } = yield take(CHANGE_PASSWORD);
    const { data } = yield call(authService.changePassword, payload);
    yield put(putUserData(data));
    yield put(putUserToken(data.token));
    
    if (data.role === 'ROLE_PATIENT') {
        history.push('/pat');
    } else if (data.role === 'ROLE_CCADMIN') {
        history.push('/ccadmin/' + data.id);
    } else if (data.role === 'ROLE_DOCTOR') {
        history.push('/doc');
    } else if (data.role === 'ROLE_NURSE') {
        history.push('/nurse-page/' + data.id);
    } else if (data.role === 'ROLE_ADMINC') {
        history.push('/adminc');
    } else {
        alert('Nije odobren pristup sistemu!');
    }
}


