import HttpClient from './HttpBaseClient';
//eslint-disable-next-line
import { history } from '../index';
//eslint-disable-next-line
import { format } from 'util';

const FINALPOINTS = {
    FETCH_CODEBOOK_DATA: '/med-diag/all',
    ADD_CODE: '/med-diag/add'
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
                FINALPOINTS.ADD_CODE,
                payload
            );
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    }

}

export default new MedDiagService();