import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setBookingStatus } from "../../../../Features/BookingDeatails/bookingDeatilsSlice";
import BookingSection from "../BookingSection";
import './BookingStatusSection.css';

const BookingStatusSection = props => {
    const bookingStatuses = [
        "Lack Of Payment",
        "Down Payment Made",
        "Fully Paid",
        "Canelled",
        "Unavailable",
    ]
    const dispatch = useDispatch();
    const currentBookingStatus = useSelector(state => state.bookingDetails.bookingStatus);
    const handleOnClickBookingStatus = value => {
        dispatch(setBookingStatus(value));
    }

    return (
        <div className="booking-status-div">
            <div style={{fontSize: '15px', marginTop: '10px', marginBottom: '20px'}}>
                Booking Status
            </div>
            <div className="booking-status-content" id="booking-status-content">
                <List>
                {
                    bookingStatuses.map(bookingStatus => {
                        return(
                            <ListItemButton className="booking-status-item" onClick={() => handleOnClickBookingStatus(bookingStatus)} 
                                style={currentBookingStatus === bookingStatus ? {backgroundColor: 'lightskyblue'}: {}}>
                                {bookingStatus}
                            </ListItemButton>
                        )
                    })
                }
                </List>
            </div>
        </div>
    )
};

export default BookingStatusSection;
