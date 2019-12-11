const initialState = {
    data: {
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        role: window.localStorage.getItem('role'),
        clinicId: null
    },
    patients: [],
    absholrequests: [],
    recepies: [],
    calendar: {
        id: '',
        calendarItemResponses: []
    }
};

const doctorReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {
};

export default nurseReducer;