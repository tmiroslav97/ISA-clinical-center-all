import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNurseData } from '../store/user/actions';
import { Tabs, Tab } from 'react-bootstrap';
import UserProfile from '../components/UserProfile';
import PatientList from '../components/PatientList';
import WorkCalendar from '../components/WorkCalendar';
import HolAbsRequest from '../components/HolAbsRequest';
import RewriteRecepie from '../components/RewriteRecepie';
import { userDataSelector } from '../store/user/selectors';

const NurseHomePage = ({ match }) => {
    const dispatch = useDispatch();
    const id = match.params.id;
    const data = useSelector(userDataSelector);

    useEffect(() => {
        dispatch(
            fetchNurseData({
                id
            })
        );
    }, []);

    return (
        <Tabs id="left-tabs-doc-home" >
            <Tab eventKey="zero" title="Patients list">
                <PatientList clinicId={data.clinicId}/>
            </Tab>
            <Tab eventKey="second" title="Holiday/absence requests">
                <HolAbsRequest personnelId={data.id} clinicId={data.clinicId} />
            </Tab>
            <Tab eventKey="third" title="Perscriptions">
                <RewriteRecepie nurseId={data.id} />
            </Tab>
            <Tab eventKey="fourth" title="WorkCalendar">
                <WorkCalendar personnelId={data.id} role={data.role} />
            </Tab>
            <Tab eventKey="fifth" title=" User Profile">
                <UserProfile data={data} />
            </Tab>
        </Tabs>
    );
}

export default NurseHomePage;