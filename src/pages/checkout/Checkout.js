import { Button } from 'react-bootstrap';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Checkout.css'

export default function Checkout() {

    const { date, fee, duration } = useParams();

    return (
        <div className="checkout-container">
            <h2>Congratulations, we've received your booking and hope to see you soon!</h2>
            <h3>Booking for {date}</h3>
            <h4>${fee} for {duration} hours</h4>
        </div>
    )

}