export function putPatientData(state, payload) {
    return {
        ...state,
        data: payload
    };
}

export function putDoctorsData(state, payload) {
    return {
        ...state,
        doctors: payload
    };
}


export function putClinicsDataPatient(state, payload) {
    return {
        ...state,
        clinics: payload
    };
}
