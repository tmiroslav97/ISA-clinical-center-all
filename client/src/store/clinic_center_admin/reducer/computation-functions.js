export function putCCAdminData(state, payload) {
    return {
        ...state,
        data: payload
    };
}
  
export function putCCAdminToken(state, payload) {
    return {
        ...state,
        token: payload
    };
}