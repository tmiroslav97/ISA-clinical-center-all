import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_PATIENTS: '/pat/all',
    FETCH_PATIENTS_BY_CLINIC_ID: '/pat/all/%s'
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

    fetchPatientsByClinicId = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_PATIENTS_BY_CLINIC_ID,payload.clinicId)
            );

            const patients = data;
            return { patients };
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export default new PatientService();
