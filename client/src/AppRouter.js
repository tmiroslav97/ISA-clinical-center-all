import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PatientHomePage from './components/PatientHomePage';

const AppRouter = () =>{
    return(
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/pat" component={PatientHomePage}/>

            <Route exact path="/page-not-found" component={() => <h1>Page not found!</h1>}/>
            <Redirect from="*" to="/page-not-found" />
        </Switch>
    );
};

export default AppRouter;