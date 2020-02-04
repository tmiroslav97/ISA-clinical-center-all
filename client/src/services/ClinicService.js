import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    REG_CLINIC: '/clinic/reg-clinic',
    FETCH_CLINICS: '/clinic/clinics',
    REG_CLINIC_ADMIN: '/adm-cli/reg-clinic-admin',
    FETCH_CLINIC_PAGINATION_DATA: '/clinic/all/%s'
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

    searchClinic = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.SEARCH_CLINIC,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    
    fetchClinicPaginationData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_CLINIC_PAGINATION_DATA, payload.pageCnt)
            );
            
            const clinicPag = data;
            return { clinicPag };
        } catch (error) {
            console.log(error.response.data);
        }
    };


}

export default new ClinicService();