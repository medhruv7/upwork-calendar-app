import { useDispatch, useSelector } from "react-redux";
import { openBookingModal } from "../Features/Render/renderSlice";
import './RoomBar.css';
import { RiHotelBedFill } from "react-icons/ri";
import { AiFillCalendar, AiOutlineCalendar } from 'react-icons/ai'
import { setBookings, setBookingStatus, setFromBookingDate, setGuestAdult, setOtherDetails, setPrice, setSelectedBooking, setSelectedRoom, setToBookingDate } from "../Features/BookingDeatails/bookingDeatilsSlice";

const getDaysInMonth = (month, year) => {
    let days = [];
    let date = new Date(year, month, 1);
    while(date.getMonth() == month){
        days.push({
            'dayOfWeek': new Date(date).getDay(),
            'dateOfWeek': new Date(date).getDate()
        });
        date.setDate(date.getDate() + 1);
    }
    return days;
}


const RoomBar = props => {
    const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    const rooms = useSelector(state => state.rooms.rooms);
    const date = useSelector(state => state.date.date);
    const days = getDaysInMonth(date.getMonth(), date.getFullYear());
    const bookedDates = useSelector(state => state.bookingDetails.bookedDates);
    const bookings = useSelector(state => state.bookingDetails.bookings);
    const dispatch = useDispatch();

    const handleOnClickFillRoom = (index2, selectedRoom) => {
        dispatch(setSelectedRoom(selectedRoom));
        const blockDate = new Date(date.getFullYear(), date.getMonth(), index2 + 1);
        console.log("booking", bookings, "bookedDates", bookedDates)
        if(checkIfBooked(selectedRoom, blockDate)){
            const parentId = getBookingForBookedDates(selectedRoom, blockDate);
            // console.log(parentId);
            bookings.map(booking => {
                // console.log(booking);
                if(booking.bookingId === parentId){
                    dispatch(setFromBookingDate(new Date(booking.fromBookingDate)));
                    dispatch(setToBookingDate(new Date(booking.toBookingDate)));
                    dispatch(setGuestAdult(booking.adultGuest));
                    dispatch(setBookingStatus(booking.bookingStatus));
                    dispatch(setPrice(booking.price));
                    dispatch(setOtherDetails(booking.otherDetails));
                    dispatch(setSelectedBooking(booking));
                    return;
                }
            })
        }else{
            dispatch(setFromBookingDate(blockDate));
            dispatch(setToBookingDate(blockDate));
        }
    }

    const handleOnClickBookRoom = (index, index2, selectedRoom) => {
        if(index !== 0){
            dispatch(openBookingModal());
            handleOnClickFillRoom(index2, selectedRoom);
        }
    }

    const checkIfBooked = (room, date) => {
        let booked = false;
        bookedDates.map(bookedDate => {
            if(bookedDate.room === room && date.getFullYear() === bookedDate.date.getFullYear() && date.getMonth() === bookedDate.date.getMonth() && date.getDate() === bookedDate.date.getDate()) {
                booked = true;
                return;
            }
        });
        return booked;
    }

    const getBookingForBookedDates = (room, date) => {
        let parentId = null;
        bookedDates.map(bookedDate => {
            if(bookedDate.room === room && date.getFullYear() === bookedDate.date.getFullYear() && date.getMonth() === bookedDate.date.getMonth() && date.getDate() === bookedDate.date.getDate()) {
                parentId = bookedDate.parentBookingId;
                return;
            }
        });
        return parentId;
    }

    

    

    return (
        <div className="main-room-div">
            <div className="room-display-div">
                {rooms.map((room, index) => (
                        <div className="room-block">
                            {room.room !== -1 ? 
                            <div className="room-number-display-block">
                                Room: {index}
                            </div> : <div> <AiOutlineCalendar /> <div> {monthNames[date.getMonth()]} - {date.getFullYear()} </div> </div>}
                        </div>
                    ))
                }
            </div>
            <div className="day-display-div">
                {rooms.map((room, index) => (
                    <div className="day-display-wrapper">
                        {days.map((day, index2) => (
                            <div className={"day-display-item"} style={checkIfBooked(room.room, new Date(date.getFullYear(), date.getMonth(), day.dateOfWeek)) ? {backgroundColor: "dimgrey"}: {}} onClick={() => handleOnClickBookRoom(index, index2, room.room)}>
                                {index === 0 && <div className="room-book-day-block"> <div> {week[day.dayOfWeek]} </div> <div> {day.dateOfWeek} </div>  </div>}
                                {index !== 0 && <a className="book-room-block"> <RiHotelBedFill /> </a>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RoomBar;