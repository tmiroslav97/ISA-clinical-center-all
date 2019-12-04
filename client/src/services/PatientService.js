import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_DOCTORS_DATA: '/pa/doctors'
};

class PatientService extends HttpClient{

    fetchDoctor = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_DOCTORS_DATA
            );

            const doctors = data;

            return { doctors };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchClinic = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_CLINICS_DATA
            );

            const clinics = data;

            return { clinics };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    
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

export default PatientService;
