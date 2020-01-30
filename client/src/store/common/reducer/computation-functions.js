export function putSurReqData(state, payload) {
    return {
        ...state,
        surgeryReq: payload
    };
}

export function putIsFetchSurReqData(state, payload) {
    return {
        ...state,
        isFetchSurgeryReq: payload
    };
}

export function putSurReqPageCount(state, payload) {
    return {
        ...state,
        pageCount: payload
    };
}

export function putError(state, payload) {
    return {
        ...state,
        error: payload
    };
}

export function putSuccess(state, payload) {
    return {
        ...state,
        success: payload
    };
}

