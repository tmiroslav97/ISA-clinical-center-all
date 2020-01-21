import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, Spinner } from 'react-bootstrap';
import ClinicProfile from './ClinicProfile';
import BusinessReport from './BusinessReport';
import UserProfile from '../UserProfile';
import ExeminationRoom from '../Room/RoomAllAtOnce';
import Appointments from './AppointmentTypeAllAtOnce';
import Doctors from './DoctorAllAtOnce';
import FreeAppointment from './FreeApointment';
import PriceList from './Pricelist';
import { userDataSelector, isFetchUserDataSelector } from '../../store/user/selectors';
import { fetchCAdminData } from '../../store/user/actions';
import RoomSearch from '../Room/RoomSearch';

const CA = ({ match }) => {
    const dispatch = useDispatch();
    const id = match.params.id;
    const data = useSelector(userDataSelector);
    const isFetchUserData = useSelector(isFetchUserDataSelector);

    useEffect(() => {
        dispatch(
            fetchCAdminData({
                id
            })
        );
    }, [id]);

    if (!isFetchUserData) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>;
    }

    return (
        <Tabs defaultActiveKey="appointmentType" id="uncontrolled-tab-example">
            <Tab eventKey="appointmentType" title="Appointment types" >
                <Appointments />
            </Tab>
            <Tab eventKey="doctors" title="Doctors" >
                <Doctors />
            </Tab>
            <Tab eventKey="Cprofile" title="Clinic Profile">
                <ClinicProfile />
            </Tab>
            <Tab eventKey="business" title="Business Report">
                <BusinessReport />
            </Tab>
            <Tab eventKey="exeminationRoom" title="Exemination room" >
                <ExeminationRoom clinicId={data.clinicId} />
            </Tab>
            <Tab eventKey="roomSearch" title="Room search">
                <RoomSearch clinicId={data.clinicId} />
            </Tab>
            <Tab eventKey="appointments" title="Free appointments" >
                <FreeAppointment />
            </Tab>
            <Tab eventKey="priceList" title="Pricelist" >
                <PriceList />
            </Tab>
            <Tab eventKey="editing" title="User profile" >
                <UserProfile data={data} />
            </Tab>
        </Tabs>
    );
}

export default CA;