import {
    LOGIN,
    REGISTRATION,
    PUT_USER_DATA,
    PUT_USER_TOKEN,
    CHANGE_PASSWORD,
    SIGN_OUT,
    FETCH_CCADMIN_DATA,
    REG_CC_ADMIN,
    REG_CLINIC,
    FETCH_CLINICS_DATA,
    PUT_CLINICS_DATA,
    REG_CLINIC_ADMIN,
    FETCH_NURSE_DATA
} from './constants';


//nurse actions
export const fetchNurseData = payload => ({
    type: FETCH_NURSE_DATA,
    payload
});

//clinic center admin actions
export const regClinicAdmin = payload => ({
    type: REG_CLINIC_ADMIN,
    payload
});

export const putClinicsData = payload => ({
    type: PUT_CLINICS_DATA,
    payload
});

export const regClinic = payload => ({
    type: REG_CLINIC,
    payload
});

export const fetchClinicsData = payload => ({
    type: FETCH_CLINICS_DATA,
    payload
});

export const fetchCCAdminData = payload => ({
    type: FETCH_CCADMIN_DATA,
    payload
});

export const regCCAdmin = payload => ({
    type: REG_CC_ADMIN,
    payload
});

//user actions
export const signOut = payload => ({
    type: SIGN_OUT,
    payload
});

export const loginUser = payload => ({
    type: LOGIN,
    payload
});

export const registerUser = payload => ({
    type: REGISTRATION,
    payload
});

export const putUserData = payload => ({
    type: PUT_USER_DATA,
    payload
});

export const putUserToken = payload => ({
    type: PUT_USER_TOKEN,
    payload
});

export const changePassword = payload => ({
    type: CHANGE_PASSWORD,
    payload
});

