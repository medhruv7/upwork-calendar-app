import { createSlice } from "@reduxjs/toolkit";

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [{'id':'temp'}],
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
        }
    }
})

export const { addRoom, deleteRoom } = roomsSlice.actions;
export default roomsSlice.reducer;