import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dateReducer from '../Features/Date/dateSlice';
import roomsReducer from '../Features/Rooms/roomsSlice';
import renderReducer from '../Features/Render/renderSlice';
import bookingDetailsReducer from '../Features/BookingDeatails/bookingDeatilsSlice'
export default configureStore({
    reducer: {
        date: dateReducer,
        rooms: roomsReducer,
        render: renderReducer,
        bookingDetails: bookingDetailsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
})