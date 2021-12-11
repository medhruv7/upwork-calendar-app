import './DisplayYear.css'
import { useSelector, useDispatch } from 'react-redux';
import { setDate, setYear } from '../../Features/Date/dateSlice';
import moment from 'moment';
import { AiOutlineCalendar, AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Calendar from 'react-calendar';
import { closeYearCalendar, openYearCalendar } from '../../Features/Render/renderSlice';
const formatDate = (date) => {
    return moment(date).format('YYYY');
}


const DisplayYear = props => {
    const date = useSelector((state) => state.date.date);
    const showYearCalendar = useSelector(state => state.render.showYearCalendar);
    const dispatch = useDispatch();
    const handleOnClickYearCalendar = value => {
        dispatch(setDate(value));
        dispatch(closeYearCalendar());
    }
    return(
    <div className="main-div">
        {/* <div className="item">
         <AiOutlineLeft />
        </div> */}
        <div className="item" onClick={() => dispatch(openYearCalendar())}>
            <div> {formatDate(date)} </div>
            <a> <AiOutlineCalendar /> </a>
        </div>
        {showYearCalendar && <div>
                <div> <Calendar maxDetail={"decade"} onClickYear={(value) => handleOnClickYearCalendar(value)}/> </div>
                <div><a><AiOutlineClose onClick = {() => dispatch(closeYearCalendar())} /> </a></div>
            </div>}
        {/* <div className="item">
            <AiOutlineRight />
        </div> */}
    </div>)
}

export default DisplayYear;
