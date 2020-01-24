const reducer = 'surReqReducer';

export const surReqDataSelector = state => state[reducer].surgeryReq;
export const isFetchSurReqDataSelector = state => state[reducer].isFetchSurgeryReq;
export const surReqPageCountSelector = state => state[reducer].pageCount;