import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNurseData } from '../store/user/actions';
import { Tabs, Tab, Spinner } from 'react-bootstrap';
import UserProfile from '../components/UserProfile';
import PatientList from '../components/PatientList';
import WorkCalendar from '../components/WorkCalendar';
import HolAbsRequest from '../components/HolAbsRequest';
import RewritePrescription from '../components/RewritePrescription';
import { userDataSelector, userIdSelector, isFetchUserDataSelector } from '../store/user/selectors';

const NurseHomePage = () => {
    const dispatch = useDispatch();
    const id = useSelector(userIdSelector);
    const data = useSelector(userDataSelector);
    const isFetchUserData = useSelector(isFetchUserDataSelector);

    useEffect(() => {
        if (id != null) {
            dispatch(
                fetchNurseData({
                    id
                })
            );
        }
    }, [id]);

    if (!isFetchUserData) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }

    return (
        <Tabs id="left-tabs-doc-home" >
            <Tab eventKey="zero" title="Patients list">
                <PatientList clinicId={data.clinicId} />
            </Tab>
            <Tab eventKey="second" title="Holiday/absence requests">
                <HolAbsRequest personnelId={data.id} clinicId={data.clinicId} />
            </Tab>
            <Tab eventKey="third" title="Perscriptions">
                <RewritePrescription nurseId={data.id} />
            </Tab>
            <Tab eventKey="fourth" title="WorkCalendar">
                <WorkCalendar personnelId={data.id} roles={data.roles} />
            </Tab>
            <Tab eventKey="fifth" title=" User Profile">
                <UserProfile />
            </Tab>
        </Tabs>
    );
}

export default NurseHomePage;