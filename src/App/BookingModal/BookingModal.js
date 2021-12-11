import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeBookingCalendar, closeBookingModal, closeToBookingCalendar } from "../Features/Render/renderSlice";
import './BookingModal.css';
import { AiOutlineClose } from 'react-icons/ai'
import BookingTab from "./BookingTab/BookingTab";
const BookingModal = props => {
    const isBookingModalOpen = useSelector(state => state.render.isBookingModalOpen);
    const isBookingTabOpen = useSelector(state => state.render.isBookingTabOpen);
    const dispatch = useDispatch();
    const handleOnCloseModal = () => {
        dispatch(closeBookingModal());
        dispatch(closeBookingCalendar());
        dispatch(closeToBookingCalendar());
    }
    return (
        <div>
            <ReactModal
                isOpen={isBookingModalOpen}
                ariaHideApp={false}
            >
                <div className="booking-modal-main-div">
                    <div className="booking-modal-top">
                        <div className="booking-modal-heading">
                            Booking
                        </div>
                        <a onClick={() => handleOnCloseModal()} className="booking-modal-close">
                            <AiOutlineClose />
                        </a>
                    </div>
                    <div>
                        {isBookingTabOpen && <div> <BookingTab /> </div>}
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default BookingModal;