import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import Clinics from './Clinics';
import History from './History';
import MedicalRecord from './MedicalRecord';
import Profile from './Profile';


function PatientHomePage(){
    return(
        <Tabs id="left-tabs-example" defaultActiveKey="clinics">
            <Tab eventKey="clinics" title="Clinics">
                <Clinics/>
            </Tab>
            <Tab eventKey="history" title="History">
                <History/>
            </Tab>
            <Tab eventKey="medicalrecord" title="Medical Record">
                <MedicalRecord/>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Profile/>
            </Tab>
                    
        </Tabs>
    );
}
 
export default PatientHomePage;