export function putDoctorData(state, payload) {
    return {
        ...state,
        data: payload
    };
}