import React from 'react';
import HeaderBackground from '../../../assets/header-background.png';
import Logo from '../../../assets/logo.png';
import './Header.css';

export default function Header() {

    return (
        <div id="header-container" style={{ backgroundImage: `url(${HeaderBackground})` }}>
            <div id="header-title">
                <img src={Logo}/>
                <h1>Booking App</h1>
            </div>
        </div>
    )

}