import { 
    PUT_CCADMIN_DATA,
    FETCH_CCADMIN_DATA
} from './constants';


export const putCCAdminData = payload => ({
    type: PUT_CCADMIN_DATA,
    payload
});
  

export const fetchCCAdminData = payload =>({
    type: FETCH_CCADMIN_DATA,
    payload
});