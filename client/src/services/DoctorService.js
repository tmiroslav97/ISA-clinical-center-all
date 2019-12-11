import HttpClient from './HttpBaseClient';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_DOCTOR_DATA: '/doctor/%s',
};

class DoctorService extends HttpClient {
    fetchDoctorData = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_DOCTOR_DATA, payload.id)
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    }

}

export default new DoctorService();