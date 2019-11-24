import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_CCADMIN_DATA: '/cca/%s'
};

class CCAdminService extends HttpClient {
    fetchCCAdminData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_CCADMIN_DATA, payload.ccAdminId)
            );
            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
}

export default new CCAdminService();