import BookingSection from "./BookingSection/BookingSection"
import './BookingTab.css'
import PriceSection from "./PriceSection/PriceSection";
const BookingTab = props => {
    return (
        <div className="booking-tab-main-div">
            <div className="booking-details-section">
                <BookingSection />
            </div>
            <div className="booking-price-section">
                <PriceSection />
            </div>
        </div>
    )
}

export default BookingTab;