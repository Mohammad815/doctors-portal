
import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppiontMentHeader from './AppiontMentHeader';
import AvailableAppointMent from './AvailableAppointMent';


const Appointment = () => {
    const [date, setDate]=React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppiontMentHeader date={date} setDate={setDate}></AppiontMentHeader>
            <AvailableAppointMent date={date}></AvailableAppointMent>
        </div>
    );
};

export default Appointment;