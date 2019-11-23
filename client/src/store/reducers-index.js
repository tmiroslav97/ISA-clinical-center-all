import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import ccAdminReducer from './clinic_center_admin/reducer';
const rootReducer = combineReducers({
   userReducer,
   ccAdminReducer
});
  
export default (state, action) => {
    return rootReducer(state, action);
};