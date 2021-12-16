import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeBookingCalendar, closeBookingModal, closeToBookingCalendar, openBookingTab, openClientTab, setBookingModalSelected } from "../Features/Render/renderSlice";
import './BookingModal.css';
import { AiOutlineClose, AiOutlineSave } from 'react-icons/ai'
import BookingTab from "./BookingTab/BookingTab";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import { addBooking, updateBookedDates } from "../Features/BookingDeatails/bookingDeatilsSlice";
import moment from "moment";
import ClientTab from "./ClientTab/ClientTab";
import { Button, Tab, Tabs } from "@mui/material";
import 'react-datepicker/dist/react-datepicker.css'

const BookingModal = props => {
    const serverUrl = "http://localhost:8000";
    const isBookingModalOpen = useSelector(state => state.render.isBookingModalOpen);
    const isBookingTabOpen = useSelector(state => state.render.isBookingTabOpen);
    const toBookingDate = useSelector(state => state.bookingDetails.toBookingDate);
    const fromBookingDate = useSelector(state => state.bookingDetails.fromBookingDate);
    const adultGuest = useSelector(state => state.bookingDetails.adultGuest);
    const selectedRoom = useSelector(state => state.bookingDetails.selectedRoom);
    const bookingStatus = useSelector(state => state.bookingDetails.bookingStatus);
    const price = useSelector(state => state.bookingDetails.price);
    const otherDetails = useSelector(state => state.bookingDetails.otherDetails);
    const clientInfo = useSelector(state => state.bookingDetails.clientInfo);
    const isClientTabOpen = useSelector(state => state.render.isClientTabOpen);
    const bookingModalSelected = useSelector(state => state.render.bookingModalSelected);
    const selectedBooking = useSelector(state => state.bookingDetails.selectedBooking);

    const dispatch = useDispatch();
    const handleOnCloseModal = () => {
        dispatch(closeBookingModal());
        dispatch(closeBookingCalendar());
        dispatch(closeToBookingCalendar());
    }
    const handOnClickSave = () => {
        if(!selectedBooking){
            const bookingId = uuidv4();
            const booking = {
                'bookingId': bookingId,
                'toBookingDate': moment(toBookingDate).format('YYYY-MM-DD'),
                'fromBookingDate': moment(fromBookingDate).format('YYYY-MM-DD'),
                'adultGuest': adultGuest,
                'selectedRoom': selectedRoom,
                'bookingStatus': bookingStatus,
                'price': price,
                'otherDetails': otherDetails,
                'clientInfo': clientInfo
            }

            console.log("new Booking : ", booking);
            dispatch(addBooking(booking));
            dispatch(updateBookedDates());
            axios.post(serverUrl+"/saveBookingDetails", booking).then(({data}) => 
            { 
                console.log("Response of saving booking Data : ", data);
                alert("Data Successfully Saved");
            });
        }else{
            console.log("selected Booking", selectedBooking);
            const payload = {
                'oldBookingId':selectedBooking.bookingId,
                'newBooking': selectedBooking
            }
            axios.post(serverUrl+"/updateBooking", payload).then(({data}) => {
                console.log("Response of Updating Booking Data : ", data);
                alert("Updated Successfully");
            })
        }
        
    }

    
    return (
        <div>
            <ReactModal
                isOpen={isBookingModalOpen}
                ariaHideApp={false}
                onRequestClose={() => handleOnCloseModal()}
            >
                <div className="booking-modal-main-div">
                    <div className="booking-modal-top">
                        {/* <div className="booking-modal-heading">
                            Booking
                        </div> */}
                        
                        <div className="booking-modal-right">
                            <a className="modal-save" onClick={() => handOnClickSave()}>
                                <Button variant="contained">Save</Button>
                            </a>
                            <a onClick={() => handleOnCloseModal()}>
                                <AiOutlineClose />
                            </a>
                        </div>
                    </div>
                    <Tabs>
                            <Tab variant="contained" size="small"  onClick={() => {dispatch(setBookingModalSelected("bookingDetails"))}} label="Booking Details"/>
                            <Tab variant="contained"  onClick={() => {dispatch(setBookingModalSelected("clientInfo"))}} label="Client Info"/>
                            <Tab variant="contained" label="Other Info"/>
                    </Tabs>
                    <div className="booking-modal-content">
                        {bookingModalSelected === "bookingDetails" && <div> <BookingTab /> </div>}
                        {bookingModalSelected === "clientInfo" && <div> <ClientTab /> </div>}
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default BookingModal;