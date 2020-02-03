import HttpClient from './HttpBaseClient';

const FINALPOINTS = {
    ADD_MEDICAL_REPORT: '/med-rep/add',
};

class MedicalReportService extends HttpClient {
    addMedicalReport = async payload => {
        try {
            const { data } = await this.getApiClient().post(
                FINALPOINTS.ADD_MEDICAL_REPORT,
                payload
            );

            return { data };
        } catch (error) {
            console.log(error.response.data);
        }
    }

}

export default new MedicalReportService();
