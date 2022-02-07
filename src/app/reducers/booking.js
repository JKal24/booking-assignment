import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        date: "",
        fee: 0.0,
        duration: 0.0
    },
    reducers: {
        createBooking: (state, action) => {
            const {date, fee, duration} = action.payload;
            console.log(date);
            console.log(fee);
            console.log(duration);
            state = action.payload;
        },
        refreshBooking: (state) => {
            state = {
                date: "",
                fee: 0.0,
                duration: 0.0
            }
        }
    }
})

export const { createBooking, refreshBooking } = bookingSlice.actions;

export default bookingSlice.reducer;