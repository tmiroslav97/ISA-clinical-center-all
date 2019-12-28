const reducer = 'absenceHolidayReducer';

export const absHolRequestDataSelector = state => state[reducer].absholrequests;
export const isFetchAbsHolRequests = state => state[reducer].isFetchAbsHolRequests;
