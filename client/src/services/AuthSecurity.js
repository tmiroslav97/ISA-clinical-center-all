import HttpBaseClient from './HttpBaseClient';
import { history } from '../index';

const FINALPOINTS = {
    LOGIN: '/sec/login',
    REGISTRATION: '/sec/registration'
};

class AuthSecurityService extends HttpBaseClient{
    login = async credentials => { 
        try{
        const { data } = await this.getApiClient().post(
            FINALPOINTS.LOGIN,
            credentials
        );

        if(data.role === 'ROLE_PATIENT'){
            history.push('/pat');
        }else if(data.role === 'ROLE_CCADMIN'){
            history.push('/ccadmin');
        }else if(data.role === 'ROLE_DOCTOR'){
            history.push('/doc');
        }else{
            alert('Nije odobren pristup sistemu!');
        }
        
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        localStorage.setItem('role', data.role);
        localStorage.setItem('userID', data.userID);

        /* this.AuthenticatorAssertionResponse({
            Authorization: `Bearer ${data.token}`
        }); */

        return { data };

        }catch(error){
            console.log(error.response.data);
        }
    };

    registration = async userData => {
        try{
            const { data } = await this.getApiClient().post(
                FINALPOINTS.REGISTRATION,
                userData
            );
            console.log(data);   

            history.push('/');

            return { data }
        }catch(error){
            console.log(error.response.data);
        }
    };
}

export default new AuthSecurityService(); 