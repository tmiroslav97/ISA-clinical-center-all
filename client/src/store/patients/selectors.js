const reducer = 'patientsReducer';

export const patientsSelector = state => state[reducer].patients;
export const isFetchPatientsSelector = state => state[reducer].isFetchPatients;
