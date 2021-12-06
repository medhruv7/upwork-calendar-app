import { createSlice } from 'react-redux'

export const dateSlice = createSlice({
    name: 'date',
    initialState: {
        date: new Date().getDate()
    },
    reducers: {
        'setDate': (state, action) => {
            state.date = action.payload
        },
        'setMonth': (state, action) => {
            state.date = new Date(state.date.getFullYear(), action.payload)
        },
        'setYear': (state, action) => {
            state.date = new Date(action.payload)
        }
    }
})

export const { setDate, setMonth, setYear } = dateSlice.actions;
export default dateSlice.reducer;