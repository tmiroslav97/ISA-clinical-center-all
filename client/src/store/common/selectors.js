const reducer = 'msgReducer';

export const errorSelector = state => state[reducer].error;
export const successSelector = state => state[reducer].success;