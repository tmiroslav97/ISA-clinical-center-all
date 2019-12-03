import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_PATIENTS: '/pat/all',
};

class PatientService extends HttpClient {
    fetchPatients = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_PATIENTS
            );

            const patients = data;
            return { patients };
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export default new PatientService();
