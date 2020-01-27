import {
    PUT_SUR_REQ_PAGE_COUNT,
    PUT_SUR_REQ_DATA,
    PUT_IS_FETCH_SUR_REQ_DATA,
    PUT_PICK_SUR_REQ,
    PUT_PICKED_SUR_REQ
} from '../constants';

import * as computationFunctions from './computation-functions';

const initialState = {
    surgeryReq: [],
    isFetchSurgeryReq: false,
    pageCount: 0,
    pickSurReq: false,
    pickedSurReq: null
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
    [PUT_IS_FETCH_SUR_REQ_DATA]: computationFunctions.putIsFetchSurReqData,
    [PUT_PICK_SUR_REQ]: computationFunctions.putPickSurReq,
    [PUT_PICKED_SUR_REQ]: computationFunctions.putPickedSurReq
};

export default surReqReducer;