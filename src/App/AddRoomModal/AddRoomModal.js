import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeAddRoomModal } from "../Features/Render/renderSlice";
import CircleIcon from '@mui/icons-material/Circle';
import { setRoom, setRoomInfo, setSelectedColor } from "../Features/Rooms/roomsSlice";

const AddRoomModal = props => {
    const dispatch = useDispatch();
    const isAddRoomModalOpen = useSelector(state => state.render.addRoomModalOpen);
    const roomInfo = useSelector(state => state.rooms.roomInfo);
    const colorMap = useSelector(state => state.rooms.colorMap);
    const selectedColor = useSelector(state => state.rooms.selectedColor);
    const handleOnCloseModal = () => {
        dispatch(closeAddRoomModal());
    }
    useEffect(() => {
        console.log(roomInfo);
        if(roomInfo === null){
            const roomInfoTemp = {
                name: '',
                guests: 2,
                color: 'red'
            }
            dispatch(setRoomInfo(roomInfoTemp));
        }
    });

    const handleOnSelectColor = (key) => {
        const roomInfoTemp = {
            ...roomInfo,
            color: key
        }
        dispatch(setRoomInfo(roomInfoTemp));
    }
    const handleOnChangeRoomName = value => {
        const roomInfoTemp = {
            ...roomInfo,
            name: value
        }
        dispatch(setRoomInfo(roomInfoTemp));
    }
    const handleOnChangeGuest = value => {
        if(value <= 1) return;
        const roomInfoTemp = {
            ...roomInfo,
            guests: value
        }
        dispatch(setRoomInfo(roomInfoTemp));
    }
    const handleOnClickAddRoom = () => {
        
    }

    return(
        <div>
            <ReactModal
                isOpen={isAddRoomModalOpen}
                ariaHideApp={false}
                onRequestClose={() => handleOnCloseModal()}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{marginTop: '20px'}}>
                        <TextField 
                            label="Room Name"
                            value={roomInfo ? roomInfo.name:null}
                            onChange={(e) => handleOnChangeRoomName(e.target.value)}
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <TextField
                            label="Number of guests"
                            value={roomInfo ? roomInfo.guests : null}
                            type="number"
                            onChange={(e) => handleOnChangeGuest(e.target.value)}
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>
                        Room Color
                        <CircleIcon style={{marginLeft: '30px', color: roomInfo?colorMap[roomInfo.color]:colorMap.red}}/>
                    </div>
                    <div style={{marginTop: '50px', display: 'flex', flexDirection: 'row'}}>
                        {Object.keys(colorMap).map(key => (
                            <a onClick={() => handleOnSelectColor(key)}> 
                                <CircleIcon style={{color: colorMap[key], marginLeft: '30px'}}/>
                            </a>
                        ))}
                    </div >
                    <div>
                        <Button variant="contained" style={{marginTop: '100px'}} onClick={handleOnClickAddRoom}>
                            Add Room
                        </Button>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default AddRoomModal;
