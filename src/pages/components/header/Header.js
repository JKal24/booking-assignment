import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshBooking } from '../../../app/reducers/booking'
import HeaderBackground from '../../../assets/header-background.png';
import Logo from '../../../assets/logo.png';
import './Header.css';

export default function Header() {

    const dispatch = useDispatch();

    return (
        <div id="header-container" style={{ backgroundImage: `url(${HeaderBackground})` }}>
            <Link to="/" onClick={() => dispatch(refreshBooking())}>
                <div id="header-title">
                    <img src={Logo} alt="logo" />
                    <h1>Booking App</h1>
                </div>
            </Link>
        </div>
    )

}