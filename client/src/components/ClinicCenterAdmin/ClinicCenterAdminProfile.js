import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';
import RegistrationAproval from './RegistrationAproval';
import { fetchCCAdminData } from '../../store/clinic_center_admin/actions';
import ClinicReg from './ClinicReg';
import Items from './Items';
import AdminReg from './AdminReg';


function ClinicCenterAdminProfile({ match }) {
    const dispatch = useDispatch();
    const ccAdminId = match.params.id;
    useEffect(() => {
        dispatch(
            fetchCCAdminData({
                ccAdminId
            })
        );
    });

    return (
        <Tabs id="left-tabs-doc-home" >
            <Tab eventKey="zero" title="Registration approvals">
                <RegistrationAproval />
            </Tab>
            <Tab eventKey="first" title="Register clinics">
                <ClinicReg />
            </Tab>
            <Tab eventKey="second" title="Record items">
                <Items />
            </Tab>
            <Tab eventKey="third" title="Add clinic center administrator">
                <AdminReg ccaId={ccAdminId}/>
            </Tab>
        </Tabs>
    );
}

export default ClinicCenterAdminProfile;