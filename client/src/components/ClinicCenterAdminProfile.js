import React from 'react';
import { Tab,Tabs } from 'react-bootstrap';
import RegistrationAproval from './RegistrationAproval';
import ClinicReg from './ClinicReg';
import Items from './Items';
import AdminReg from './AdminReg';

function ClinicCenterAdminProfile(){
    return(
        <Tabs id="left-tabs-doc-home" >
            <Tab eventKey="zero" title="Registration approvals">
                <RegistrationAproval/>
            </Tab>
            <Tab eventKey="first" title="Registering clinics">
                <ClinicReg/>
            </Tab>
            <Tab eventKey="second" title="Add items">
                <Items/>
            </Tab>
            <Tab eventKey="third" title="Add clinic center administrator">
                <AdminReg/>
            </Tab>
        </Tabs>
    );
}

export default ClinicCenterAdminProfile;