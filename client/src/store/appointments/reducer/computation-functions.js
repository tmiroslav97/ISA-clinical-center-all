export function putAppointmentTypes(state, payload) {
    return {
        ...state,
        appointmentTypes: payload
    };
}

export function putIsFetchAppointmentTypes(state, payload) {
    return {
        ...state,
        isFetchAppointmentTypes: payload
    };
}