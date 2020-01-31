import HttpClient from './HttpBaseClient';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_MEDICINE_DATA: '/medicine/all/%s',
    FETCH_DIAGNOSE_DATA: '/diagnose/all/%s',
    ADD_MEDICINE: '/medicine/add',
    ADD_DIAGNOSE: '/diagnose/add',
};

class MedDiagService extends HttpClient {
    fetchMedicineData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_MEDICINE_DATA, payload.pageCnt)
            );
            const medicines = data;
            return { medicines };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchDiagnoseData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_DIAGNOSE_DATA, payload.pageCnt)
            );
            const diagnoses = data;
            return { diagnoses };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    addMedicine = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ADD_MEDICINE,
                payload
            );
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    addDiagnose = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ADD_DIAGNOSE,
                payload
            );
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

}

export default new MedDiagService();