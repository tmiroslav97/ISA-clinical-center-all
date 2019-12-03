import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNurseData } from '../store/nurse/actions';
import { Tabs, Tab } from 'react-bootstrap';
import UserProfile from '../components/UserProfile';
import PatientList from '../components/PatientList';
import WorkCalendar from '../components/WorkCalendar';
import HolidayRequest from '../components/HolidayRequest';
import BookingDoc from '../components/BookingDoc';
import ApointmentInfo from '../components/ApointmentInfo';

const NurseHomePage = ({ match }) => {
    const dispatch = useDispatch();
    const nurseId = match.params.id;

    useEffect(() => {
        dispatch(
            fetchNurseData({
                nurseId
            })
        );
    }, []);

    return (
        <Tabs id="left-tabs-doc-home" >
            <Tab eventKey="zero" title="Patients list">
                <PatientList />
            </Tab>
            <Tab eventKey="first" title="ApointmentInfo">
                <ApointmentInfo />
            </Tab>
            <Tab eventKey="second" title="WorkCalendar">
                <WorkCalendar />
            </Tab>
            <Tab eventKey="third" title="Holiday requests">
                <HolidayRequest />
            </Tab>
            <Tab eventKey="fourth" title=" User Profile">
                <UserProfile />
            </Tab>
            <Tab eventKey="fifth" title="Booking">
                <BookingDoc />
            </Tab>
        </Tabs>
    );
}

export default NurseHomePage;