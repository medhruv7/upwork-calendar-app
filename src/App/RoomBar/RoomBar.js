import { useDispatch, useSelector } from "react-redux";
import { openBookingModal } from "../Features/Render/renderSlice";
import './RoomBar.css';
import { RiHotelBedFill } from "react-icons/ri";
import { AiFillCalendar, AiOutlineCalendar } from 'react-icons/ai'

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
    const dispatch = useDispatch();
    const handleOnClickBookRoom = index => {
        if(index !== 0){
            dispatch(openBookingModal());
        }
    }
    return (
        <div className="main-room-div">
            <div className="room-display-div">
                {rooms.map((room, index) => (
                        <div className="room-block">
                            {room.id !== "temp" ? 
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
                        {days.map(day => (
                            <div className="day-display-item" onClick={() => handleOnClickBookRoom(index)}>
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