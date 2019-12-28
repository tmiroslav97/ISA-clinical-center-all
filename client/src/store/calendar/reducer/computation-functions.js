export function putCalendarData(state, payload) {
    return {
        ...state,
        calendar: payload
    };
}

export function putIsCalendarFetch(state, payload) {
    return {
        ...state,
        isFetchCalendar: payload
    };
}