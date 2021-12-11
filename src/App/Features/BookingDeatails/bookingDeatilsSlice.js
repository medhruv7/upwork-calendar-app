import { createSlice } from "@reduxjs/toolkit";

export const bookingDetailsSclice = createSlice({
    name: 'bookingDeatils',
    initialState: {
        fromBookingDate: null,
        toBookingDate: null,
        childGuest: 0,
        adultGuest: 1,
    },
    reducers: {
        'setFromBookingDate': (state, action) => {
            state.fromBookingDate = action.payload;
        },
        'setToBookingDate': (state, action) => {
            state.toBookingDate = action.payload;
        },
        'setGuestChild': (state, action) => {
            state.childGuest = action.payload;
        },
        'setGuestAdult': (state, action) => {
            state.adultGuest = action.payload;
        },
    }
})

export const { setFromBookingDate, setToBookingDate, setGuestAdult, setGuestChild } = bookingDetailsSclice.actions;
export default bookingDetailsSclice.reducer;
