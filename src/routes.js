import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Header from './pages/components/header/Header';

export default function Paths() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Booking/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}