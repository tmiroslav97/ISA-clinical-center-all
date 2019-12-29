import {
    REG_CLINIC,
    FETCH_CLINICS_DATA,
    PUT_CLINICS_DATA,
    REG_CLINIC_ADMIN,
    PUT_IS_FETCH_CLINICS_DATA
} from './constants';

export const regClinicAdmin = payload => ({
    type: REG_CLINIC_ADMIN,
    payload
});

export const putClinicsData = payload => ({
    type: PUT_CLINICS_DATA,
    payload
});

export const putIsFetchClinicsData = payload => ({
    type: PUT_IS_FETCH_CLINICS_DATA,
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

