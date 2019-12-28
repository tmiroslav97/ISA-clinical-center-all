export function putNurseData(state, payload) {
    return {
        ...state,
        data: payload
    };
}

export function putAbsHolRequest(state, payload) {
    return {
        ...state,
        absholrequests: payload
    };
}

export function putRecepiesData(state, payload) {
    return {
        ...state,
        recepies: payload
    };
}
