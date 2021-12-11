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
    return (
        <div className="booking-status-div">
            <div className="booking-status-header">
                Booking Status
            </div>
            <div className="booking-status-content">
                {
                    bookingStatuses.map(bookingStatus => {
                        return(
                            <div className="booking-status-item">
                                {bookingStatus}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default BookingStatusSection;
