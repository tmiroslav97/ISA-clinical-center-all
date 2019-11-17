import HttpBaseClient from './HttpBaseClient';
import { history } from '../index';

const FINALPOINTS = {
    LOGIN: '/sec/login',
    REGISTRATION: '/sec/registration'
};

class AuthSecurityService extends HttpBaseClient{
    login = async credentials =>{
        const { data } = await this.getApiClient().post(
            FINALPOINTS.LOGIN,
            credentials
        );

        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        localStorage.setItem('role', data.role);
        localStorage.setItem('userID', data.userID);

        this.AuthenticatorAssertionResponse({
            Authorization: `Bearer ${data.token}`
        });

        //treba razraditi logiku ko se loguje, dali treba da mjenja password ili ne if (dat.role === 'ROLE_ADMIN')...
    }
}

export default new AuthSecurityService(); 