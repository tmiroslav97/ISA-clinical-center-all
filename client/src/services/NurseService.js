import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_NURSE_DATA: '/nurse/%s',
};

class NurseService extends HttpClient {
    fetchNurseData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_NURSE_DATA, payload.nurseId)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export default new NurseService();
