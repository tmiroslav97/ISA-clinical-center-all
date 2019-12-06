import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_APPOINTMENT_TYPE: 'admi-cli/appType',
    SEARCH_APPOINTMENT_TYPE: 'admi-cli/appType/search/%s/%s',
    DELETE_ROOMS_DATA: 'admi-cli/appType/delete/%s',
    EDIT_APPOINTMENT_TYPE: 'admi-cli/appType/edit/%s'
    
};

class AppointmentTypeService extends HttpClient{
    fetchAppointmentType = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.FETCH_APPOINTMENT_TYPE
            );

            const appointmentType = data;

            return { appointmentType };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    editAppointmentType = async payload => {
        try {
            const { data } = await this.getApiClient().put(
                FINALPOINTS.EDIT_APPOINTMENT_TYPE
            );

            const appointmentType = data;

            return { appointmentType };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    addAppointmentType = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ADD_APPOINTMENT_TYPE,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    deleteAppointmentType = async payload => {
        try {
            const { data } = await this.getApiClient().delete(
                FINALPOINTS.DELETE_APPOINTMENTS_TYPE,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
    searchAppointmentType = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                FINALPOINTS.SEARCH_APPOINTMENTS_TYPE,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    };
}
export default new AppointmentTypeService();