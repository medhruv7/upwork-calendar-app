import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClientEmail, setClientName, setClientPhone } from "../../Features/BookingDeatails/bookingDeatilsSlice";
import Button from '@mui/material/Button'
import { TextField } from "@mui/material";
import './ClientTab.css';

const ClientTab = props => {
    const selectedBooking = useSelector(state => state.bookingDetails.selectedBooking);
    const dispatch = useDispatch();
    const clientName = useSelector(state => state.bookingDetails.clientName);

    useEffect(() => {
        if(selectedBooking){
            dispatch(setClientName(selectedBooking.clientInfo.clientName));
        }
    }, []);
    const handleOnChangeName = (e) => {
        const val = e.target.value;
        dispatch(setClientName(val));
    }
    const handleOnChangePhone = (e) => {
        dispatch(setClientPhone(e.target.value));
    }
    const handleOnChangeEmail = e => {
        dispatch(setClientEmail(e.target.value));
    }

    return (<div className="client-info-main-div">
        <div className="client-info-head">
            Client Info
        </div>
        <div className="client-content-div">
            <div className="client-item">
                <TextField label="Name" value={clientName} onChange={(e) => handleOnChangeName(e)} size="small"/>
            </div>
            <div className="client-item">       
                <TextField label="Phone" size="small" inputProps={{type: 'number' }}  onChange={e => handleOnChangePhone(e)}/>
            </div>
            <div className="client-item">
                <TextField label="Email" size="small" onChange={e => handleOnChangeEmail(e)}/>
            </div>
        </div>
    </div>)
}

export default ClientTab;