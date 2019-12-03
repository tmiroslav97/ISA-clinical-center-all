import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import ccAdminReducer from './clinic_center_admin/reducer';
import cAdminReducer from './clinic_admin/reducer';
import nurseReducer from './nurse/reducer';
const rootReducer = combineReducers({
   userReducer,
   ccAdminReducer,
   cAdminReducer,
   nurseReducer
});
  
export default (state, action) => {
    return rootReducer(state, action);
};