export function putCCAdminData(state, payload) {
    return {
        ...state,
        data: payload
    };
}

export function putRegReqsData(state, payload) {
    return {
        ...state,
        reqs: payload
    };
}