const reducer = 'userReducer';

//user selectors
export const userDataSelector = state => state[reducer].data;
export const userTokenSelector = state => state[reducer].token;
//clinic center admin selector
export const clinicsDataSelector = state => state[reducer].clinics;
