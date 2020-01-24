import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PatientHomePage from './components/Patient/PatientHomePage';
import RegPage from './pages/RegPage';
import DoctorHomePage from './pages/DoctorHomePage';
import NurseHomePage from './pages/NurseHomePage';
import ClinicCenterAdminProfile from './components/ClinicCenterAdmin/ClinicCenterAdminProfile';
import HolidayAproval from './components/HolidayAproval';
import PasswordChanger from './components/PasswordChanger';
import ClinicAdmin from './components/ClinicAdmin/CA';
import RoomAllAtOnce from './components/Room/RoomAllAtOnce';
import RoomSearch from './components/Room/RoomSearch';
import PrivateRoute from './components/PrivateRoute';
import DoctorAllAtOnce from './components/ClinicAdmin/DoctorAllAtOnce';
import ClinicProfile from './components/ClinicAdmin/ClinicProfile';
import BusinessReport from './components/ClinicAdmin/BusinessReport';
import UserProfile from './components/UserProfile';
import FreeAppointment from './components/ClinicAdmin/FreeApointment';
import AppointmentTypAllAtOnce from './components/ClinicAdmin/AppointmentTypeAllAtOnce';
import Pricelist from './components/ClinicAdmin/Pricelist';
import SurgeryReq from './components/SurgeryRequirement/SurgeryReq';
import Unauthorized from './components/Unauthorized';


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/pat" component={PatientHomePage} accessRole="ROLE_PATIENT" />
            <Route exact path="/signup" component={RegPage} />
            <PrivateRoute exact path="/doc/:id" component={DoctorHomePage} accessRole="ROLE_DOCTOR" />
            <Route exact path="/prob" component={HolidayAproval} />
            <PrivateRoute exact path="/ccadmin/:id" component={ClinicCenterAdminProfile} accessRole="ROLE_CCADMIN" />
            <Route exact path="/signup" component={RegPage} />
            <Route exact path="/change-pass" component={PasswordChanger} />
            <PrivateRoute exact path="/nurse-page/:id" component={NurseHomePage} accessRole="ROLE_NURSE" />
            
            <PrivateRoute exact path="/adminc/:id" component={ClinicAdmin} accessRole="ROLE_ADMINC" />
            <PrivateRoute exact path="/adminc/exe-room/:clinicId" component={RoomAllAtOnce} accessRole="ROLE_ADMINC" />
            <PrivateRoute exact path="/adminc/room-search/:clinicId" component={RoomSearch} accessRole="ROLE_ADMINC" />
            <PrivateRoute exact path="/adminc/doc/:clinicId" component={DoctorAllAtOnce} accessRole="ROLE_ADMINC" />
            <PrivateRoute exact path="/adminc/cli-prof/:clinicId" component={ClinicProfile} accessRole="ROLE_ADMINC" />
            <PrivateRoute exact path="/adminc/bus-rep/:clinicId" component={BusinessReport} accessRole="ROLE_ADMINC" />
            <PrivateRoute exact path="/adminc/free-app/:clinicId" component={FreeAppointment} accessRole="ROLE_ADMINC" />
            <PrivateRoute exact path="/adminc/price-list/:clinicId" component={Pricelist} accessRole="ROLE_ADMINC" />
            <PrivateRoute exact path="/adminc/app-type/:clinicId" component={AppointmentTypAllAtOnce} accessRole="ROLE_ADMINC" />
            <PrivateRoute exact path="/adminc/sur-req/:clinicId" component={SurgeryReq} accessRole="ROLE_ADMINC" />

            <Route exact path="/user-prof" component={UserProfile} />
            <Route exact path="/page-not-found" component={() => <h1>Page not found!</h1>} />
            <Route exact path="/unauthorized" component={Unauthorized} />
            <Redirect from="*" to="/page-not-found" />
        </Switch>
    );
};

export default AppRouter;