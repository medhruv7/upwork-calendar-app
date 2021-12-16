import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = "http://localhost:8000"
export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        roomInfo : null,
        colorMap : {
            red : '#db7d76',
            green : '#a9d9ab',
            yellow : '#d9d9a9',
            blue: '#a5bdd4',
        },
        selectedColor : "red",
    },
    reducers: {
        'addRoom': (state, action) => {
            state.rooms.push(action.payload)
        },
        'deleteRoom': (state, action) => {
            const index = -1;
            for(let i = 0;i < state.rooms.length; ++i){
                if(state.rooms[i].id == action.payload){
                    index = i;
                    break;
                }
            }
            if(index > -1){
                state.rooms.splice(index, 1);
            }
        },
        'setRoom': (state, action) => {
            state.rooms = action.payload;
            console.log("setRoom : ", state.rooms)
        },
        'setRoomInfo': (state, action) => {
            state.roomInfo = action.payload;
        },
        'setSelectedColor': (state, action) => {
            state.selectedColor = action.payload;
        }
    }
})

export const { addRoom, deleteRoom, setRoom, setRoomInfo, setSelectedColor } = roomsSlice.actions;
export default roomsSlice.reducer;