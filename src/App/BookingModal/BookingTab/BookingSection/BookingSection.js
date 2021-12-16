import BookingStatusSection from "./BookingStatusSection/BookingStatusSection";
import bookingStatusSection from "./BookingStatusSection/BookingStatusSection";
import CalendarSection from "./CalendarSection/CalendarSection";
import Guestsection from "./GuestSection/GuestSection";
import './BookingSection.css'
const BookingSection = props => {
    return (<div>
        <div className="calendar-section">
            <CalendarSection />
        </div>
        <div className="booking-status-section">
            <BookingStatusSection />
        </div>
        <div className="guest-section">
            <Guestsection />
        </div>
    </div>)
}

export default BookingSection;