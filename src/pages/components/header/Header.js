import React from 'react';
import HeaderBackground from '../../../assets/header-background.png';
import './Header.css';

export default function Header() {

    return (
        <div id="header-container" style={{ backgroundImage: `url(${HeaderBackground})` }}>
            <div id="header-title"><h2>Booking App</h2></div>
        </div>
    )

}