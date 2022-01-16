import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Booking from './Booking';
import { Container } from '@mui/material';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]

const AvailableAppointMent = ({date}) => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom component="div" sx={{ color: 'info.main', m: 2 }}>
            Available Appoinments {date.toDateString()}
            </Typography>
            <Grid container spacing={2}>
                 {
                        bookings.map(book=><Booking key={book.id} date={date} book={book}></Booking>)
                    }
             </Grid>
        </Container>
    );
};

export default AvailableAppointMent;