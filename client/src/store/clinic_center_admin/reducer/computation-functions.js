export function putCCAdminData(state, payload) {
    return {
        ...state,
        data: payload
    };
}

export function putRegReqsData(state, payload) {
    console.log(payload);
    return {
        ...state,
        reqs: payload
    };
}