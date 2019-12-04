export function putRoomsData(state, payload) {
    return {
        ...state,
        rooms: payload
    };
}
export function putDoctorsData(state, payload) {
    return {
        ...state,
        doctors: payload
    };
}

export function putAppointmentType(state, payload) {
    return {
        ...state,
        appointmentType: payload
    };
}

