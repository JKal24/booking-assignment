import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './reducers/booking';

const store = configureStore({
    reducer: {
        booking: bookingReducer
    },
})

export default store;