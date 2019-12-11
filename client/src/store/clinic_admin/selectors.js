const reducer = 'cAdminReducer';

export const doctorDataSelector = state => state[reducer].doctors;
export const roomsDataSelector = state => state[reducer].rooms;
export const appointmentTypeSelector = state => state[reducer].appointmentType;