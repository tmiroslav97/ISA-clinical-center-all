import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    ADD_DOCTOR: '/adm-cli/add-doctor',
    DELETE_DOCTOR: '/adm-cli/delete/%s'
};

class CAdminService extends HttpClient{

    addDoctor = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ADD_DOCTOR
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    

    deleteDoctorsData = async payload => {
        try {
            const { data } = await this.getApiClient().delete(
                FINALPOINTS.DELETE_DOCTORS_DATA
            );

            const doctors = data;
            return { doctors };
        } catch (error) {
            console.log(error.response.data);
        }
    };
}

export default new CAdminService();