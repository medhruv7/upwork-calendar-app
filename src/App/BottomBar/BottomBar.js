import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addRoom } from '../Features/Rooms/roomsSlice';
import { AiOutlinePlus } from 'react-icons/ai'

const handleOnClickAddRoom = (dispatch) => {
    const id = uuidv4();
    const room = {
        id,
    }
    dispatch(addRoom(room));
}

const BottomBar = props => {
    const dispatch = useDispatch();
    console.log(useSelector(state => state.rooms.rooms));
    return(
        <a onClick={() => handleOnClickAddRoom(dispatch)} className="bottom-bar-main">
            Add Room
        </a>
    )
}

export default BottomBar;