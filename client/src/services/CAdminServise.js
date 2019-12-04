import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    ADD_DOCTOR: '/adminc/AddDoctor',
    DELETE_DOCTOR: '/adminc/delete/%s'
};

class CAdminService extends HttpClient{

    addDoctor = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                format(FINALPOINTS.ADD_DOCTOR, payload.regReqId)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
}

export default CAdminService;