export function putAddedDoctor(state, payload) {
    return {
        ...state,
        data: payload
    };
}