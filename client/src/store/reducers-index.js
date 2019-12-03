import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import ccAdminReducer from './clinic_center_admin/reducer';
import patientReducer from './patient/reducer';
const rootReducer = combineReducers({
   userReducer,
   ccAdminReducer,
   patientReducer
});

  
export default (state, action) => {
    return rootReducer(state, action);
};