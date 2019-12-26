export function putRegReqsData(state, payload) {
    return {
        ...state,
        reqs: payload
    };
}

export function putIsFetchRegReqs(state, payload) {
    return {
        ...state,
        isFetchRegReqs: payload
    };
}