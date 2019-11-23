import { 
    PUT_CCADMIN_DATA,
    PUT_CCADMIN_TOKEN
} from './constants';


export const putCCAdminData = payload => ({
    type: PUT_CCADMIN_DATA,
    payload
});
  
export const putCCAdminToken = payload => ({
    type: PUT_CCADMIN_TOKEN,
    payload
});