const reducer = 'appointmentReducer';

export const appointmentTypeSelector = state => state[reducer].appointmentTypes;
export const isFetchAppointmentTypeSelector = state => state[reducer].isFetchAppointmentTypes;