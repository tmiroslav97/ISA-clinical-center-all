export function putPatientData(state, payload) {
    return {
        ...state,
        data: payload
    };
}