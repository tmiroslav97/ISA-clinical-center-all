import { take, put, call } from "redux-saga/effects";

import {LOGIN, REGISTRATION} from './constants';
import authService from '../../services/AuthSecurity';

import { 
    putUserData, 
    putUserToken 
} from './actions';

export function* registration(){
    const { payload } = yield take(REGISTRATION);
    const { data } = yield call(authService.registration,payload);
    alert('registraovan');
    // payload.callback();
}

export function* login(){
    const { payload } = yield take(LOGIN);
    const { data } = yield call(authService.login, payload);
    alert('logovan');
    // yield put(puUserData(data));
    // yield put(putUserToken(data.token));
}