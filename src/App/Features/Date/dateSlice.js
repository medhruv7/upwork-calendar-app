import { createSlice } from "@reduxjs/toolkit"

export const dateSlice = createSlice({
    name: 'date',
    initialState: {
        date: (new Date()),
    },
    reducers: {
        'setDate': (state, action) => {
            state.date = action.payload;
        },
        'setYear': (state, action) => {
            const date_now = state.date;
            date_now.setYear(action.payload);
            state.date = date_now; 
        },
        'setToday': (state, action) => {
            state.date = new Date();
        }
    }
})

export const { setDate, setYear, setToday } = dateSlice.actions;
export default dateSlice.reducer;