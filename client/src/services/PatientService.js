import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_PATIENT_DATA: '/pat/patient',
    FETCH_DOCTORS_DATA: '/pat/doctors',
    FETCH_CLINICS_DATA: '/pat/clinics',
    SEARCH_DOCTORS_DATA: '/pat/search-doctors/%s/%s',
    SEARCH_CLINICS_DATA: '/pat/search-clinics/%s/%s',
    FETCH_PATIENTS: '/pat/all',
    FETCH_PATIENTS_BY_CLINIC_ID: '/pat/all/%s'
};

class PatientService extends HttpClient{

    fetchPatientsByClinicId = async payload => {
        try {
            console.log(payload);
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_PATIENTS_BY_CLINIC_ID,payload.clinicId)
            );
            console.log(data);
            const patients = data;
            return { patients };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchDoctorsData = async payload => {
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

    fetchClinicsData = async payload => {
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
    
    fetchPatientData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_PATIENT_DATA
            );

            const patients = data;
            return { patients };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    searchClinicsData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.SEARCH_CLINICS_DATA
            );

            const clinics = data;
            return { clinics };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    searchDoctorsData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.SEARCH_DOCTORS_DATA
            );

            const doctors = data;
            return { doctors };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    
}

export default new PatientService();
