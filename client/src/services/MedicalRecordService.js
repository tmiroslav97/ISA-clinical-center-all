import HttpClient from './HttpBaseClient';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_MEDICAL_RECORD: '/med-rec/%s',
    FETCH_MEDICAL_RECORD_BY_APP: '/med-rec/app/%s',
    EDIT_MEDICAL_RECORD: '/med-rec/edit'
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

    editMedicalRecord = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.EDIT_MEDICAL_RECORD,
                payload
            );
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

}

export default new MedicalRecordService();