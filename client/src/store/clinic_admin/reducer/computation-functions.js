export function putDoctorsData(state, payload) {
    return {
        ...state,
        doctors: payload
    };
}