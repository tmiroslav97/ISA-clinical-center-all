import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';


const FINALPOINTS = {
    FETCH_SUR_REQ: '/sur-req/all/%s/%s',
    FETCH_FINISH_RESERVATION: '/sur-req/reserve'
};

class SurgeryRequirementService extends HttpClient {

    fetchSurReqData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_SUR_REQ, payload.clinicId, payload.pageCnt)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    fetchFinishReservation = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.FETCH_FINISH_RESERVATION,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };


}

export default new SurgeryRequirementService();