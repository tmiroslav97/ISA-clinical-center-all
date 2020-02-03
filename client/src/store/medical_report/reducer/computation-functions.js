export function putMedicalReport(state, payload) {
    return {
        ...state,
        medicalReport: payload
    };
}

export function putIsFetchMedicalReport(state, payload) {
    return {
        ...state,
        isFetchMedicalReport: payload
    };
}