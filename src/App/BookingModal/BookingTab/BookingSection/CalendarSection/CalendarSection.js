import './CalendarSection.css';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { closeBookingCalendar, closeToBookingCalendar, openBookingCalendar, openToBookingCalendar } from '../../../../Features/Render/renderSlice';
import { setFromBookingDate, setToBookingDate } from '../../../../Features/BookingDeatails/bookingDeatilsSlice';
import moment from 'moment';
import { AiOutlineCalendar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Button, TextField } from '@mui/material';
import ReactDatePicker from 'react-datepicker';
const CalendarSection = props => {
    const dispatch = useDispatch();
    
    const fromBookingDate = useSelector(state => state.bookingDetails.fromBookingDate);
    const toBookingDate = useSelector(state => state.bookingDetails.toBookingDate);
    const showBookingCalendar = useSelector(state => state.render.showBookingCalendar);
    const showToBookingCalendar = useSelector(state => state.render.showToBookingCalendar);
    const handleOnClickFromCalendar = (value) => {
        dispatch(closeBookingCalendar());
        dispatch(setFromBookingDate(value));
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

    const handleOnChangeDateRange = dates => {
        const [start, end] = dates;
        dispatch(setFromBookingDate(start));
        dispatch(setToBookingDate(end));
        if(end !== null){
            dispatch(closeToBookingCalendar());
        }
    }
    return (
        <div>
            <div className="date-selection">
                <div className="to-from-selection">
                    <div className="from-item">
                        <div>
                        <TextField onClick={() => dispatch(openToBookingCalendar())} label="From" value={moment(fromBookingDate).format('DD-MM-YYYY')}/>
                        {toBookingDate && <TextField style={{marginLeft: '10px'}} label="To" value={moment(toBookingDate).format('DD-MM-YYYY')}/>}
                        {showToBookingCalendar && 
                            <ReactDatePicker 
                                selected={fromBookingDate}
                                selectsRange
                                inline
                                startDate={fromBookingDate}
                                endDate={toBookingDate}
                                onChange={handleOnChangeDateRange}
                                shouldCloseOnSelect={true}
                            />
                        }
                        </div>
                        {/* <TextField onClick={() => dispatch(openBookingCalendar())} label="From" size='small' value={fromBookingDate?moment(fromBookingDate).format('DD-MM-YYYY'):null} /> */}
                    </div>
                    {/* <div className="to-item">
                        <TextField onClick={() => dispatch(openToBookingCalendar())} size='small' label="From" value={toBookingDate?moment(toBookingDate).format('DD-MM-YYYY'):null} />
                    </div> */}
                    {/* {showToBookingCalendar && <div> <Calendar onClickDay={(value, e) => handleOnClickToCalendar(value)}/> </div>} */}
                </div>
                {!showToBookingCalendar && <div className="num-of-night-selection">
                    <Button variant='text' size='small' onClick={() => handleOnClickDecreaseNight()} className="num-nights-minus">
                        <AiOutlineMinus />
                    </Button>
                    <div className="num-nights-item">
                        <TextField label="Number Of Nights" size='small' value={getNumberOfNights()} />
                    </div>
                    <Button variant='text' size='small' onClick={handleOnClickIncreaseNight}>
                        <AiOutlinePlus />
                    </Button>
                </div>}
            </div>
        </div>
    )
}

export default CalendarSection;