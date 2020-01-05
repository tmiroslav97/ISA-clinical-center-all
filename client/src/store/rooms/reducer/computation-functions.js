export function putRoomsData(state, payload) {
    return {
        ...state,
        rooms: payload
    };
}

export function putIsFetchRooms(state, payload) {
    return {
        ...state,
        isFetchRooms: payload
    };
}