import React from "react"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import shakingHands from '../../assets/shaking-hands.jpg';
import './Home.css';

export default function Home() {

    return (
        <div className="home-contents">
            <h1 className="home-title">The World's Leading Booking Advisor</h1>
            <div className="description">
                <img src={shakingHands} className="description-image" alt="company-values"/>
                <ul>
                    <li>
                        <h5>Served over 500,000 clients</h5>
                    </li>
                    <li>
                        <h5>Can do virtual or in-person bookings</h5>
                    </li>
                </ul>
            </div>
            <div className="booking">
                <h1 className="booking-text">Want to book a meeting?</h1>
                <Button variant="light" className="booking-link"><Link to="/booking">See Bookings</Link></Button>
            </div>        
        </div>
    )
    
}