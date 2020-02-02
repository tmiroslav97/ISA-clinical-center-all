import HttpClient from './HttpBaseClient';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_MEDICAL_RECORD: '/med-rec/%s',
    FETCH_MEDICAL_RECORD_BY_APP: '/med-rec/app/%s'
};

class MedicalRecordService extends HttpClient {
    fetchMedicalRecord = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_MEDICAL_RECORD, payload.id)
            );
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchMedicalRecordByApp = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_MEDICAL_RECORD_BY_APP, payload.typeId)
            );
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

}

export default new MedicalRecordService();