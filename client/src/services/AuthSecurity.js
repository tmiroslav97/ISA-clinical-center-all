import HttpBaseClient from './HttpBaseClient';
import { history } from '../index';

const FINALPOINTS = {
    LOGIN: '/sec/login',
    REGISTRATION: '/sec/registration'
};

class AuthSecurityService extends HttpBaseClient{
    login = async credentials => { 
        const { data } = await this.getApiClient().post(
            FINALPOINTS.LOGIN,
            credentials
        );

        if(data.role === 'ROLE_PATIENT'){
            history.push('/pat');
        }else if(data.role === 'ROLE_CCADMIN'){
            history.push('/adm');
        }else if(data.role === 'ROLE_DOCTOR'){
            history.push('/doc');
        }else{
            alert('Nije odobren pristup sistemu!');
        }
        

        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        localStorage.setItem('role', data.role);
        localStorage.setItem('userID', data.userID);

        this.AuthenticatorAssertionResponse({
            Authorization: `Bearer ${data.token}`
        });
        
        // treba razraditi logiku ko se loguje, dali treba da mjenja password 
        // ili ne if (dat.role === 'ROLE_ADMIN')...
        // da se redirektuje na svoju stranicu u zavisnosti od role
        
        return { data }
    };

    registration = async userData => {
        const { data } = await this.getApiClient().post(
            FINALPOINTS.REGISTRATION,
            userData
        );
        alert(data);       
        history.push('/');
        return { data }
    };
}

export default new AuthSecurityService(); 