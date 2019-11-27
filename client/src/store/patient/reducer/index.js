const initialState = {
    data: {
        id: window.localStorage.getItem('id'),
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: '',
        city: '',
        phoneNum: '',
        unoip: '',
        role: window.localStorage.getItem('role'),

    },
    clinics: []
};

const patientReducer = (state = initialState, { type, payload }) => {
    if (actionHandler.hasOwnProperty(type)) {
        return actionHandler[type](state, payload);
    }
    return state;
};

const actionHandler = {

};

export default patientReducer;