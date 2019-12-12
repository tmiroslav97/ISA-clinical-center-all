import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import History from './History';
import MedicalRecord from './MedicalRecord';
import Profile from './Profile';
import ClinicSearch from './ClinicSearch';
import DoctorSearch from './DoctorSearch';


function PatientHomePage(){
    return(
        <Tabs id="left-tabs-example" defaultActiveKey="first">
            <Tab eventKey="second" title="History">
                <History/>
            </Tab>
            <Tab eventKey="third" title="Medical Record">
                <MedicalRecord/>
            </Tab>
            <Tab eventKey="fourth" title="Profile">
                <Profile/>
            </Tab>
            <Tab eventKey="fifth" title="Search Clinic">
                <ClinicSearch/>
            </Tab>
            <Tab eventKey="sixth" title="Search Doctor">
                <DoctorSearch/>
            </Tab>
                    
        </Tabs>
    );
}
 
export default PatientHomePage;