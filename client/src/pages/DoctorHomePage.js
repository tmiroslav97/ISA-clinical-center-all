import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UserProfile from '../components/UserProfile';
import PatientList from '../components/PatientList';
import WorkCalendar from '../components/WorkCalendar';
import HolAbsRequest from '../components/HolAbsRequest';
import BookingDoc from '../components/BookingDoc';
import ApointmentInfo from '../components/ApointmentInfo';

function DoctorHomePage(){
    return(
        <Tabs id="left-tabs-doc-home" >
            <Tab  eventKey="zero" title="Patients list">
                <PatientList/>
            </Tab>
            <Tab eventKey="first" title="ApointmentInfo">
                <ApointmentInfo/>
            </Tab>
            <Tab eventKey="second" title="WorkCalendar">
                <WorkCalendar/>
            </Tab>
            <Tab eventKey="third" title="Holiday/absence requests">
                <HolAbsRequest/>
            </Tab>
            <Tab eventKey="fourth" title=" User Profile">
                <UserProfile/>
            </Tab>
            <Tab eventKey="fifth" title="Booking">
                <BookingDoc/> 
            </Tab>
        </Tabs>
    );
}

export default DoctorHomePage;