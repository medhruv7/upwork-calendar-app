import { Button } from "@mui/material";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setDate, setMonth } from "../../Features/Date/dateSlice";
import './DisplayMonth.css'
const DisplayMonth = props => {
    const dispatch = useDispatch();
    const date = useSelector(state => state.date.date);
    console.log(date)
    const handleOnClickMonth = (value) => {
        const date_now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        date_now.setMonth(value);
        dispatch(setDate(date_now));
    }

    return(
        <div className="display-month-container">
            {
                moment.months().map((month,index) => (
                    <Button size='small' variant="contained" style={{marginLeft: '10px'}} key={index} className="display-month-item" onClick={() => handleOnClickMonth(index)}>
                        {month}
                    </Button>
                ))
            }
        </div>
    )
}

export default DisplayMonth;
