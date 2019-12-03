const reducer = 'nurseReducer';

export const nurseDataSelector = state => state[reducer].data;
export const patientsSelector = state => state[reducer].patients;