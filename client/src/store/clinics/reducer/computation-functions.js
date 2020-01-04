export function putClinicsData(state, payload) {
    return {
        ...state,
        clinics: payload
    };
}

export function putIsFetchClinicsData(state, payload) {
    return {
        ...state,
        isFetchClinics: payload
    };
}