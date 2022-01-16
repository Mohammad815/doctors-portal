import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from './BookingModal';

const Booking = ({book,date}) => {
    const {name,time,space}=book;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
        <Grid item xs={8} md={4} >
            <Paper elevation={3} sx={{ py: 3 }}>
            <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main' }}>
                {name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                {time}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                {space} space availabe
            </Typography>
            <Button onClick={handleOpen} variant="contained">Booking</Button>
            </Paper>
       </Grid>
       <BookingModal book={book} date={date} open={open} handleClose={handleClose}></BookingModal>
        </>
    );
};

export default Booking;