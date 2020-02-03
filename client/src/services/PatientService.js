import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_PATIENT_DATA: '/pat/%s',
    FETCH_DOCTORS_DATA_PATIENT: '/doctor/doctors',
    FETCH_CLINICS_DATA_PATIENT: '/clinic/clinics',
    SEARCH_DOCTORS_DATA_PATIENT: '/doctor/search-doctors',
    SEARCH_CLINICS_DATA_PATIENT: '/clinic/search-clinics',
    FETCH_PATIENTS: '/pat/all',
    FETCH_PATIENTS_BY_CLINIC_ID: '/pat/all/%s',
    FETCH_PATIENT_BY_APP: 'pat/app/%s',
};

class PatientService extends HttpClient {

    fetchPatientsByClinicId = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_PATIENTS_BY_CLINIC_ID, payload.clinicId)
            );

            const patients = data;
            return { patients };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchDoctorsDataPatient = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_DOCTORS_DATA_PATIENT
            );

            const doctors = data;

            return { doctors };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchClinicsDataPatient = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_CLINICS_DATA_PATIENT
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

    searchClinicsDataPatient = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.SEARCH_CLINICS_DATA_PATIENT
            );

            const clinics = data;
            return { clinics };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    searchDoctorsDataPatient = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.SEARCH_DOCTORS_DATA_PATIENT
            );

            const doctors = data;
            return { doctors };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchPatientByApp = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_PATIENT_BY_APP,payload.typeId)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

}

export default new PatientService();
