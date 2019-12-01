const reducer = 'ccAdminReducer';

export const ccAdminDataSelector = state => state[reducer].data;
export const regReqsDataSelector = state => state[reducer].reqs;
export const clinicsDataSelector = state => state[reducer].clinics;
export const medicineRecordSelector = state => state[reducer].medicineRecord;
export const medicineDataSelector = state => state[reducer].medicines;