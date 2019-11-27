const reducer = 'ccAdminReducer';

export const ccAdminDataSelector = state => state[reducer].data;
export const regReqsDataSelector = state => state[reducer].reqs;
export const clinicsDataSelector = state => state[reducer].clinics;