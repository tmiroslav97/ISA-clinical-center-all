import React from 'react';
import { Tab, Tabs} from 'react-bootstrap';
import ClinicProfile from './ClinicProfile';
import BusinessReport from './BusinessReport';
import Editing from './Editing';
import ExeminationRoom from './ExeminationRoom';
import Appointments from './Appointments';
import Doctors from './Doctors';

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
            <Tab eventKey="appointments" title="Appointments" >
                <Appointments/>
            </Tab>
            <Tab eventKey="doctors" title="Doctors" >
                <Doctors/>
            </Tab>
        </Tabs>
    );
}

export default CA;