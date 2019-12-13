import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_ADMINC_DARA: '/adm-cli/%s',
    ADD_DOCTOR: '/adm-cli/add-doctor',
    //DELETE_DOCTOR: '/adm-cli/delete',
    FETCH_DOCTOR_DATA: '/adm-cli/fetch'
    
};


class CAdminService extends HttpClient{



    addDoctor = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ADD_DOCTOR, 
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    
    fetchCAdminData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_ADMINC_DATA, payload.cAdminId)
            );
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchDoctorData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_DOCTOR_DATA
            );
            const doctor = data;
            return { doctor };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    

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