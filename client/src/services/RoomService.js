import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_ROOMS_DATA: 'ca/Rooms',
    
};

class RoomService extends HttpClient{

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

export default new RoomService();