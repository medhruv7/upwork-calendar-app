import { createSlice } from "@reduxjs/toolkit";

export const renderSlice = createSlice({
    name: 'render',
    initialState: {
        isBookingModalOpen: false,
        isBookingTabOpen: true,
        showBookingCalendar: false,
        showToBookingCalendar: false,
        showYearCalendar: false,
        isClientTabOpen: false,
        bookingModalSelected: 'bookingDetails',
        addRoomModalOpen: false,
    },
    reducers: {
        'openBookingModal': (state, action) => {
            state.isBookingModalOpen = true;
        },
        'closeBookingModal': (state, action) => {
            state.isBookingModalOpen = false;
        },
        'openBookingTab': (state, action) => {
            state.isBookingTabOpen = true;
        },
        'closeBookingTab': (state, action) => {
            state.isBookingModalOpen = false;
        },
        'openBookingCalendar': (state, action) => {
            state.showBookingCalendar = true;
        },
        'closeBookingCalendar': (state, action) => {
            state.showBookingCalendar = false;
        },
        'openToBookingCalendar': (state, action) => {
            state.showToBookingCalendar = true;
        },
        'closeToBookingCalendar': (state, action) => {
            state.showToBookingCalendar = false;
        },
        'openYearCalendar': (state, action) => {
            state.showYearCalendar = true;
        },
        'closeYearCalendar': (state, action) => {
            state.showYearCalendar = false;
        },
        'openClientTab': (state, action) => {
            state.isClientTabOpen = true;
        },
        'closeClientTab': (state, action) => {
            state.isClientTabOpen = false;
        },
        'setBookingModalSelected': (state, action) => {
            state.bookingModalSelected = action.payload;
        },
        'openAddRoomModal': (state, action) => {
            state.addRoomModalOpen = true;
        },
        'closeAddRoomModal': (state, action) => {
            state.addRoomModalOpen = false;
        }
    }
})

export const { openBookingModal, closeBookingModal, openBookingTab, 
    closeBookingTab, openBookingCalendar, closeBookingCalendar,
    openToBookingCalendar, closeToBookingCalendar, openYearCalendar, closeYearCalendar,
    openClientTab, closeClientTab, setBookingModalSelected, openAddRoomModal,
    closeAddRoomModal
} = renderSlice.actions;
export default renderSlice.reducer;
