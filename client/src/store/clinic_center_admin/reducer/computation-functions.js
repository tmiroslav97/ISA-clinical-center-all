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

export function putClinicsData(state, payload) {
    return {
        ...state,
        clinics: payload
    };
}