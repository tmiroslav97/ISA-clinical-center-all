import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_CODEBOOK_DATA: '/med-diag/all',
    ADD_CODE: '/medi-diag/add'
};

class MedDiagService extends HttpClient {
    fetchCodebook = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_CODEBOOK_DATA
            );

            const codebook = data;
            return { codebook };
        } catch (error) {
            console.log(error.response.data);
        }
    }

    addCode = async payload => {
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

}

export default new MedDiagService();