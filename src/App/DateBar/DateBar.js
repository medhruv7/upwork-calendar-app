import './DateBar.css'
import DisplayMonth from './DisplayMonth/DisplayMonth';
import DisplayYear from './DisplayYear/DisplayYear';

const DateBar = props => {
    return (
        <div className="date-bar-main">
            <DisplayYear />
            <DisplayMonth />
        </div>
    )
}

export default DateBar;
