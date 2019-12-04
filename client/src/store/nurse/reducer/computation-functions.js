export function putNurseData(state, payload) {
    return {
        ...state,
        data: payload
    };
}

export function putPatients(state, payload) {
    return {
        ...state,
        patients: payload
    };
}

export function putAbsHolRequest(state, payload) {
    return {
        ...state,
        absholrequests: payload
    };
}