import HttpClient from './HttpBaseClient';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_DOCTOR_DATA: '/doctor/%s',
    ADD_DOCTOR: '/doctor/add-doctor',
    FETCH_DOCTORS_DATA: '/doctor/doctors',
    FETCH_DOCTORS_BY_CLINICID: '/doctor/all/%s'
};

class DoctorService extends HttpClient {

    fetchDoctorsByClinicId = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_DOCTORS_BY_CLINICID, payload.clinicId)
            );
            const doctors = data;
            return { doctors };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchDoctorData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_DOCTOR_DATA, payload.id)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchDoctorsDataOnClinic = async payload => {
            try {
                const { data } = await this.getApiClient().get(
                    format(FINALPOINTS.FETCH_DOCTORS_DATA_ON_CLINIC, payload.clinicId)
                );
    
                return { data };
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

    searchDoctor = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.SEARCH_DOCTOR,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

}

export default new DoctorService();