import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import Clinics from './Clinics';
import History from './History';
import MedicalRecord from './MedicalRecord';
import Profile from './Profile';


function PatientHomePage(){
    return(
        <Tabs id="left-tabs-example" defaultActiveKey="first">
            <Tab eventKey="first" title="Clinics">
                <Clinics/>
            </Tab>
            <Tab eventKey="second" title="History">
                <History/>
            </Tab>
            <Tab eventKey="third" title="Medical Record">
                <MedicalRecord/>
            </Tab>
            <Tab eventKey="fourth" title="Profile">
                <Profile/>
            </Tab>
                    
        </Tabs>
    );
}
 
export default PatientHomePage;