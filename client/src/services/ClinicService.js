import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    REG_CLINIC: '/clinic/reg-clinic',
    FETCH_CLINICS: '/clinic/clinics',
    REG_CLINIC_ADMIN: '/cca/reg-clinic-admin',
};

class ClinicService extends HttpClient {

    regClinic = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.REG_CLINIC,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
            alert(error.response.data);
        }
    };

    fetchClinicsData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_CLINICS
            );

            const clinics = data;

            return { clinics };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    regClinicAdmin = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.REG_CLINIC_ADMIN,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };


}

export default new ClinicService();