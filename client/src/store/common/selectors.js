const reducer = 'msgReducer';

export const errorSelector = state => state[reducer].error;
export const successSelector = state => state[reducer].success;
export const warnSeletor = state => state[reducer].warn;
export const infoSelector = state => state[reducer].info;