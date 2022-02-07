import React from 'react';
import { useSelector } from 'react-redux';

export default function Checkout() {

    const date = useSelector(state => state.booking.date);
    const fee = useSelector(state => state.booking.fee);
    const duration = useSelector(state => state.booking.duration);

    return (
        <div>
            {date} {fee} {duration}
        </div>
    )

}