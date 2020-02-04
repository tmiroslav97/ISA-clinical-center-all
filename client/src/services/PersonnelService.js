import HttpClient from './HttpBaseClient';
import { history } from '../index';
import { format } from 'util';

const FINALPOINTS = {
    ABS_HOL_REQUEST: '/absence-hol/req',
    FETCH_ABS_HOL_REQUEST: '/absence-hol/my-abs-hol/%s',
    FETCH_CALENDAR: '/personnel/my-cal/%s'
};

class PersonnelService extends HttpClient {
    absHolRequest = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ABS_HOL_REQUEST,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    }

    fetchAbsHolRequests = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_ABS_HOL_REQUEST, payload.personnelId)
            );

            const absholrequests = data;
            return { absholrequests };
        } catch (error) {
            console.log(error.response.data);
        }
    }

    fetchCalendar = async payload => {
        try {
            const { data } = await this.getApiClient().get(
                format(FINALPOINTS.FETCH_CALENDAR, payload.personnelId)
            );
            
            let calendar = {
                id: data.id,
                calendarItemResponses: []
            };

            data.calendarItemResponses.forEach(element => calendar.calendarItemResponses.push({
                id: element.id,
                title: element.title,
                start: new Date(element.start),
                end: new Date(element.end),
                type: element.type,
                typeId: element.typeId,
                allday: element.allday
            }));

            return { calendar };
        } catch (error) {
            console.log(error.response.data);
        }
    }

}

export default new PersonnelService();
