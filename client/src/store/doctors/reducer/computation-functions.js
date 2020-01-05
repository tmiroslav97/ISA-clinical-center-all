export function putDoctorsData(state, payload) {
    return {
        ...state,
        doctors: payload
    };
}

export function putIsFetchDoctors(state, payload) {
    return {
        ...state,
        isFetchDoctors: payload
    };
}