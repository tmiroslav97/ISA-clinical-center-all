export function putRoomsData(state, payload) {
    return {
        ...state,
        rooms: payload
    };
}

export function putAppointmentType(state, payload) {
    return {
        ...state,
        appointmentType: payload
    };
}

