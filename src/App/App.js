import Navbar from './Navbar/Navbar'
import './App.css'
import DateBar from './DateBar/DateBar';
import BottomBar from './BottomBar/BottomBar';
import RoomBar from './RoomBar/RoomBar';
import BookingModal from './BookingModal/BookingModal';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookDates, setBookings, updateBookedDates } from './Features/BookingDeatails/bookingDeatilsSlice';
import { setRoom } from './Features/Rooms/roomsSlice';
import { closeBookingModal } from './Features/Render/renderSlice';
import ReactDatePicker from 'react-datepicker';
import AddRoomModal from './AddRoomModal/AddRoomModal';

function App() {
  const serverUrl = "http://localhost:8000" 
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms.rooms);
  const fetchAllBookingDetails = () => {
    axios.get(`${serverUrl}/getBookingDetails`).then(({data}) => {
      console.log("Booking Detail Api Data : ", data);
      dispatch(setBookings(data));
      dispatch(updateBookedDates());
    });
    axios.get(`${serverUrl}/getRoom`).then(({data}) => {
      // console.log("Room Detail Api Data : ", data);
      dispatch(setRoom(data));
    })
  }

  const handleOnClickRoomDiv = () => {
    dispatch(closeBookingModal());
  }

  useEffect(() => {
    // console.log("render");
    fetchAllBookingDetails();
  },[]);

  return (
    <div className="main-app">
      {/* <Navbar /> */}
      <div className="date-bar">
        <DateBar />
      </div>
      <div>
        <RoomBar />
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
      <div>
        <AddRoomModal />
      </div>
      <div>
        <BookingModal />
      </div>
    </div>
  );
}

export default App;
