import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const bookingDetailsSclice = createSlice({
    name: 'bookingDeatils',
    initialState: {
        bookings: [],
        fromBookingDate: null,
        toBookingDate: null,
        childGuest: 0,
        adultGuest: 1,
        bookedDates: [],
        selectedRoom: -1,
        bookingStatus: "Lack Of Payment",
        price: 0,
        otherDetails: '',
        clientInfo: {
            clientName:'',
            clientPhone:'',
            clientEmail: '',
        },
        selectedBooking: null,
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
        'setBookings': (state, action) => {
            state.bookings = action.payload;
        },
        'addBookDates': (state, action) => {
            state.bookedDates.push(action.payload);
        },
        'deleteBookDates': (state, action) => {
            const index = state.bookedDates(action.payload);
            if(index > -1){
                state.bookedDates.splice(index, 1);
            }
        },
        'setSelectedRoom': (state, action) => {
            state.selectedRoom = action.payload;
        },
        'setBookingStatus': (state, action) => {
            state.bookingStatus = action.payload;
        },
        'setPrice': (state, action) => {
            state.price = action.payload;
        },
        'setOtherDetails': (state, action) => {
            state.otherDetails = action.payload;
        },
        'setClientData': (state, action) => {
            state.clientDate = action.payload;
        },
        'addBooking': (state, action) => {
            state.bookings.push(action.payload);
        },
        'updateBookedDates': (state, action) => {
            state.bookedDates = [];
            state.bookings.forEach(booking => {
                const fromBookingDate = new Date(booking.fromBookingDate);
                const toBookingDate = new Date(booking.toBookingDate);
                for(let now = new Date(fromBookingDate.getTime()); now <= new Date(toBookingDate.getTime());){
                  const bookedDate = {
                    'room': booking.selectedRoom,
                    'date': new Date(now.getTime()),
                    'parentBookingId': booking.bookingId
                  }
                  state.bookedDates.push(bookedDate);
                  now.setDate(now.getDate() + 1);
                }
            })
        },
        'setSelectedBooking': (state, action) => {
            state.selectedBooking = action.payload;
        },
        'setClientName': (state, action) => {
            state.clientInfo.clientName = action.payload;
        },
        'setClientPhone': (state, action) => {
            state.clientInfo.clientPhone = action.payload;
        },
        'setClientEmail': (state, action) => {
            state.clientInfo.clientEmail = action.payload;
        }
    }
})

export const { setFromBookingDate, setToBookingDate, setGuestAdult, setGuestChild, setBookings,
    addBookDates, deleteBookDates, setSelectedRoom, setBookingStatus, setPrice, setOtherDetails,
     setClientData, addBooking, updateBookedDates, setSelectedBooking, setClientName,
     setClientPhone, setClientEmail,
} = bookingDetailsSclice.actions;
export default bookingDetailsSclice.reducer;
