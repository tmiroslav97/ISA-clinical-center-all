import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_NURSE_DATA: '/nurse/%s',
    FETCH_RECEPIES: '/prescription/all/%s',
    REWRITE_PRESCRIPTION: '/prescription/rewrite/%s/%s'
};

class NurseService extends HttpClient {
    fetchNurseData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_NURSE_DATA, payload.id)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    }

    fetchPrescriptions = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_RECEPIES, payload.clinicId)
            );
            
            const prescriptions = data;
            return { prescriptions };
        } catch (error) {
            console.log(error.response.data);
        }
    }

    reweritePrescription = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                format(FINALPOINTS.REWRITE_PRESCRIPTION, payload.nurseId, payload.prescriptionId)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    }

}

export default new NurseService();
