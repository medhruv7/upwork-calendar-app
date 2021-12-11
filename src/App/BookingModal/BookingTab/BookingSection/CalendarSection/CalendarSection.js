import './CalendarSection.css';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { closeBookingCalendar, closeToBookingCalendar, openBookingCalendar, openToBookingCalendar } from '../../../../Features/Render/renderSlice';
import { setFromBookingDate, setToBookingDate } from '../../../../Features/BookingDeatails/bookingDeatilsSlice';
import moment from 'moment';
import { AiOutlineCalendar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const CalendarSection = props => {
    const dispatch = useDispatch();
    
    const fromBookingDate = useSelector(state => state.bookingDetails.fromBookingDate);
    const toBookingDate = useSelector(state => state.bookingDetails.toBookingDate);
    const showBookingCalendar = useSelector(state => state.render.showBookingCalendar);
    const showToBookingCalendar = useSelector(state => state.render.showToBookingCalendar);
    const handleOnClickFromCalendar = (value) => {
        dispatch(closeBookingCalendar());
        dispatch(setFromBookingDate(value));
        dispatch(setToBookingDate(value));
    }
    const handleOnClickToCalendar = (value) => {
        if(value >= fromBookingDate){
            dispatch(closeToBookingCalendar());
            dispatch(setToBookingDate(value));
        }else{
            alert("To Date Should be greater than From Date");
        }
    }
    const getNumberOfNights = () => {
        if(toBookingDate === null || fromBookingDate === null) return null;
        const oneDay = 24*60*60*1000;
        return (Math.round((toBookingDate - fromBookingDate)/oneDay) + 1);
    }
    const handleOnClickIncreaseNight = () => {
        if(getNumberOfNights() === null) return;
        const newToBookingDate = new Date(toBookingDate.getFullYear(), toBookingDate.getMonth(), toBookingDate.getDate());
        newToBookingDate.setDate(newToBookingDate.getDate() + 1);
        dispatch(setToBookingDate(newToBookingDate));
    }
    const handleOnClickDecreaseNight = () => {
        if(getNumberOfNights() === null) return;
        if(getNumberOfNights() == 1) return;
        const newBookingToDate = new Date(toBookingDate.getFullYear(), toBookingDate.getMonth(), toBookingDate.getDate());
        newBookingToDate.setDate(newBookingToDate.getDate() - 1);
        dispatch(setToBookingDate(newBookingToDate));
    }

    return (
        <div>
            <div className="date-selection">
                <div className="to-from-selection">
                    <div className="from-item">
                        From : {fromBookingDate?moment(fromBookingDate).format('DD-MM-YYYY'):null}
                    </div>
                    <a onClick={() => dispatch(openBookingCalendar())}> <AiOutlineCalendar /> 
                    </a>
                    {showBookingCalendar && <div> <Calendar onClickDay={(val, e) => handleOnClickFromCalendar(val)}/> </div>}
                    <div className="to-item">
                        To : {toBookingDate?moment(toBookingDate).format('DD-MM-YYYY'):null}
                    </div>
                    <a onClick={() => dispatch(openToBookingCalendar())}> <AiOutlineCalendar /> 
                    </a>
                    {showToBookingCalendar && <div> <Calendar onClickDay={(value, e) => handleOnClickToCalendar(value)}/> </div>}
                </div>
                <div className="num-of-night-selection">
                    <a onClick={() => handleOnClickDecreaseNight()} className="num-nights-minus">
                        <AiOutlineMinus />
                    </a>
                    <div className="num-nights-item">
                        Number Of Nights : {getNumberOfNights()}
                    </div>
                    <a onClick={handleOnClickIncreaseNight}>
                        <AiOutlinePlus />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CalendarSection;