import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBackground from '../../../assets/header-background.png';
import Logo from '../../../assets/logo.png';
import './Header.css';

export default function Header() {

    return (
        <div id="header-container" style={{ backgroundImage: `url(${HeaderBackground})` }}>
            <Link to="/">
                <div id="header-title">
                    <img src={Logo} alt="logo" />
                    <h1>Booking App</h1>
                </div>
            </Link>
            <h2>Edited Component</h2>
        </div>
    )

}