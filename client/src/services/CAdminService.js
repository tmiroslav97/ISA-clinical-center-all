import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    ADD_DOCTOR: '/adminc/AddDoctor',
    FETCH_ROOMS_DATA: 'adminc/Rooms',
    SEARCH_ROOMS_DATA: 'adminc/search/%s/%s',
    DELETE_ROOMS_DATA: 'adminc/delete/%s'
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
    addRoomsDate = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ADD_ROOMS_DATA,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    deleteRoomsData = async payload => {
        try {
            const { data } = await this.getApiClient().delete(
                FINALPOINTS.DELETE_ROOMS_DATA,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    

}

export default CAdminService;