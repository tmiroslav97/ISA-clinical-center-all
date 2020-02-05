import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    FETCH_APPOINTMENT_TYPES: '/appointment-type/all/%s',
    ADD_APPOINTMENT_TYPE: '/appointment-type/add-appointment-type/%s',
    DELETE_APPOINTMENTS_TYPE: '/appointment-type/delete-appointment-type',
    FETCH_APPOINTMENT: '/appointment/%s',
    //SEARCH_APPOINTMENT_TYPE: 'admi-cli/appType/search/%s/%s',
    // DELETE_ROOMS_DATA: 'admi-cli/appType/delete/%s',
    //EDIT_APPOINTMENT_TYPE: 'admi-cli/appType/edit/%s',
    //ADD_APPOINTMENT_TYPE: 'adm-cli/add-appointment-type'
};

class AppointmentTypeService extends HttpClient {
    fetchAppointmentType = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_APPOINTMENT_TYPES, payload.clinicId)
            );

            const appointmentTypes = data;

            return { appointmentTypes };
        } catch (error) {
            console.log(error.response.data);
        }
    };

    addAppointmentType = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                format(FINALPOINTS.ADD_APPOINTMENT_TYPE, payload.clinicId),
                { type: payload.type }

            );
            return { data };

        } catch (error) {
            console.log(error.response.data);
        }
    };

    deleteAppointmentType = async payload => {
        try {
            console.log("Hocu ovde");
            const { data } = await this.getApiClient().delete(
                FINALPOINTS.DELETE_APPOINTMENTS_TYPE,
                { appointmentID: payload.id }
            );
            console.log(payload);

            return { data };
        } catch (error) {
            console.log("Necu ovde");
            console.log(error.response.data);
        }
    };

    fetchAppointment = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_APPOINTMENT, payload.id)
            );

            return { data };
        } catch (error) {
            return error.response;
        }
    };
    /*editAppointmentType = async payload => {
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
    };*/
}
export default new AppointmentTypeService();