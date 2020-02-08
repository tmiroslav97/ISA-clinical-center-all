import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_ADMINC_DATA: '/adm-cli/%s',
    EDIT_USER_INFORMATION: '/adm-cli/edit-user-profile'
};


class CAdminService extends HttpClient{

    
    fetchCAdminData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_ADMINC_DATA, payload.id)
            );
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    editUserInformation = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.EDIT_USER_INFORMATION, 
                payload
            );
            console.log(data);
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };




    

   /* fetchDoctorData = async payload => {//eslint-disable-next-line

        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_DOCTOR_DATA
            );
            const doctor = data;
            return { doctor };
        } catch (error) {
            console.log(error.response.data);
        }
    };*/

    
    

    /*deleteDoctorsData = async payload => {
        try {
            const { data } = await this.getApiClient().delete(
                FINALPOINTS.DELETE_DOCTORS_DATA
            );

            const doctors = data;
            return { doctors };
        } catch (error) {
            console.log(error.response.data);
        }
    };*/
}

export default new CAdminService();