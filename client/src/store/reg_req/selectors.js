const reducer = 'regReqsReducer';

export const regReqsDataSelector = state => state[reducer].reqs;
export const isFetchRegReqs = state => state[reducer].isFetchRegReqs;
