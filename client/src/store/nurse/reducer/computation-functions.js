export function putNurseData(state, payload) {
    return {
        ...state,
        data: payload
    };
}

export function putRecepiesData(state, payload) {
    return {
        ...state,
        recepies: payload
    };
}
