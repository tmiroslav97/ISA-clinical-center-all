const reducer = 'patientsReducer';

export const regReqsDataSelector = state => state[reducer].patients;
export const isFetchRegReqs = state => state[reducer].isFetchPatients;
