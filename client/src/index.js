import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.css';
import NavBar from './components/NavBar';
import AppRouter from './AppRouter';
import { createBrowserHistory } from 'history'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <NavBar/>
        <AppRouter/>
        <Footer/>
    </Router>
    , 
    document.getElementById('root')
);
