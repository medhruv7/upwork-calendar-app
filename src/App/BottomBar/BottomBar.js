import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addRoom, setRoom } from '../Features/Rooms/roomsSlice';
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios';
import { Button } from '@mui/material';
import { openAddRoomModal } from '../Features/Render/renderSlice';

const handleOnClickAddRoom = (rooms, dispatch) => {
    dispatch(openAddRoomModal());
}

const BottomBar = props => {
    const dispatch = useDispatch();
    const rooms = useSelector(state => state.rooms.rooms);
    return(
        <Button color='success' variant='contained' onClick={() => handleOnClickAddRoom(rooms, dispatch)} className="bottom-bar-main">
            Add Room
        </Button>
    )
}

export default BottomBar;