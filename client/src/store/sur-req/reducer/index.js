import {
    PUT_SUR_REQ_PAGE_COUNT,
    PUT_SUR_REQ_DATA,
    PUT_IS_FETCH_SUR_REQ_DATA
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    surgeryReq: [],
    isFetchSurgeryReq: false,
    pageCount: 0,
    pickSurReq: false
};

const surReqReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
    [PUT_SUR_REQ_PAGE_COUNT]: computationFunctions.putSurReqPageCount,
    [PUT_SUR_REQ_DATA]: computationFunctions.putSurReqData,
    [PUT_IS_FETCH_SUR_REQ_DATA]: computationFunctions.putIsFetchSurReqData
};

export default surReqReducer;