export function putUserData(state, payload) {
    return {
        ...state,
        data: payload
    };
}
  
export function putUserToken(state, payload) {
    return {
        ...state,
        token: payload
    };
}

