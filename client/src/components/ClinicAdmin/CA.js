import React from 'react';
import { Tab, Tabs} from 'react-bootstrap';
import ClinicProfile from './ClinicProfile';
import BusinessReport from './BusinessReport';
import Editing from './Editing';
import ExeminationRoom from './RoomAllAtOnce';
import Appointments from './AppointmentTypeAllAtOnce';
import Doctors from './DoctorAllAtOnce';
import FreeAppointment from './FreeApointment';
import PriceList from './Pricelist';

const CA = () => {
    return(
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="Cprofile" title="Clinic Profile">
                <ClinicProfile />
            </Tab>
            <Tab eventKey="business" title="Business Report">
                <BusinessReport/>
            </Tab>
            <Tab eventKey="editing" title="Editing Profile" >
                <Editing />
            </Tab>
            <Tab eventKey="exeminationRoom" title="Exemination room" >
                <ExeminationRoom/>
            </Tab>
            <Tab eventKey="appointmentType" title="Appointment types" >
                <Appointments/>
            </Tab>
            <Tab eventKey="doctors" title="Doctors" >
                <Doctors/>
            </Tab>
            <Tab eventKey="appointments" title="Free appointments" >
                <FreeAppointment/>
            </Tab>
            <Tab eventKey="priceList" title="Pricelist" >
                <PriceList/>
            </Tab>
        </Tabs>
    );
}

export default CA;