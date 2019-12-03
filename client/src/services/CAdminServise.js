import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';
import { FETCH_ROOMS_DATA } from '../store/clinic_admin/constants';

const FINALPOINTS = {
    ADD_DOCTOR: '/ca/AddDoctor',
    FETCH_ROOMS_DATA: 'ca/Rooms'
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

    fetchRoomsData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_ROOMS_DATA
            );

            const rooms = data;

            return { rooms };
        } catch (error) {
            console.log(error.response.data);
        }
    };

}

export default CAdminService;