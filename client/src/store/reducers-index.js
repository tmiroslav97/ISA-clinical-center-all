import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import ccAdminReducer from './clinic_center_admin/reducer';
import cAdminReducer from './clinic_admin/reducer';
const rootReducer = combineReducers({
   userReducer,
   ccAdminReducer,
   cAdminReducer
});
  
export default (state, action) => {
    return rootReducer(state, action);
};