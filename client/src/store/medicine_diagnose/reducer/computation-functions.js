export function putCodebookData(state, payload) {
    return {
        ...state,
        codebook: payload
    };
}

export function putIsFetchCodebook(state, payload) {
    return {
        ...state,
        isFetchCodebook: payload
    };
}