import { useDispatch, useSelector } from "react-redux"
import { setGuestAdult, setGuestChild } from "../../../../Features/BookingDeatails/bookingDeatilsSlice";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './GuestSection.css'
import { Button, TextField } from "@mui/material";

const Guestsection = props => {
    const childGuest = useSelector(state => state.bookingDetails.childGuest);
    const adultGuest = useSelector(state => state.bookingDetails.adultGuest);
    const dispatch = useDispatch();
    const handleMinusAdultGuest = () => {
        if(adultGuest > 1){
            dispatch(setGuestAdult(adultGuest - 1));
        }
    }
    const handlePlusAdultGuest = () => {
        dispatch(setGuestAdult(adultGuest + 1));
    }
    const handleMinusChildGuest = () => {
        if(childGuest > 0){
            dispatch(setGuestChild(childGuest - 1));
        }
    }
    const handlePlusChildGuest = () => {
        dispatch(setGuestChild(childGuest + 1));
    }
    return (
        <div className="guest-main-div">
            <div className="guest-header" style={{fontSize: '15px'}}>
                Number Of Guests
            </div>
            <div className="guest-adult-wrapper">
                <div className="guest-adult-selector">
                    <Button variant="text" size="small" onClick={handleMinusAdultGuest}>
                        <AiOutlineMinus />
                    </Button>
                    <TextField size="small" label="Adults" value={adultGuest} />
                    <Button onClick={handlePlusAdultGuest} variant="text" size="small">
                        <AiOutlinePlus />
                    </Button>
                </div>
            </div>
            {/* <div className="guest-child-wrapper">
                <div>
                    Children
                </div>
                <div className="guest-child-selector">
                    <a onClick={handleMinusChildGuest}>
                        <AiOutlineMinus />
                    </a>
                    <div className="guest-child-display">
                        {childGuest}
                    </div>
                    <a onClick={handlePlusChildGuest}>
                        <AiOutlinePlus />
                    </a>
                </div>
            </div> */}
        </div>
    )
}

export default Guestsection;