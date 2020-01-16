import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';
import RegistrationAproval from './RegistrationAproval';
import { fetchCCAdminData } from '../../store/user/actions';
import ClinicReg from './ClinicReg';
import ClinicAdminReg from './ClinicAdminReg';
import AdminReg from './AdminReg';
import Codebook from './Codebook';
import { userDataSelector } from '../../store/user/selectors';


function ClinicCenterAdminProfile({ match }) {
    const dispatch = useDispatch();
    const ccAdminId = match.params.id;
    const ccAdminData = useSelector(userDataSelector);
    useEffect(() => {
        dispatch(
            fetchCCAdminData({
                ccAdminId
            })
        );
    }, [ccAdminId]);


    return (
        <Tabs id="left-tabs-doc-home" >
            <Tab eventKey="zero" title="Registration approvals">
                <RegistrationAproval />
            </Tab>
            <Tab eventKey="first" title="Register clinics">
                <ClinicReg />
            </Tab>
            <Tab eventKey="second" title="Register clinic admin">
                <ClinicAdminReg />
            </Tab>
            <Tab eventKey="third" title="Codebook">
                <Codebook />
            </Tab>
            {ccAdminData.predefined &&
                <Tab eventKey="fourth" title="Add clinic center administrator">
                    <AdminReg ccaId={ccAdminId} />
                </Tab>
            }
        </Tabs>
    );
}

export default ClinicCenterAdminProfile;