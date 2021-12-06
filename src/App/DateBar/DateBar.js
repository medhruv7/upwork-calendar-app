import './DateBar.css'
import DisplayYear from './DisplayYear/DisplayYear';

const DateBar = props => {
    return (
        <div className="date-bar-main">
            <DisplayYear />
        </div>
    )
}

export default DateBar;
