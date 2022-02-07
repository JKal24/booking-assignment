import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Checkout from './pages/checkout/Checkout';
import Header from './pages/components/header/Header';
import Footer from './pages/components/footer/Footer';

export default function Paths() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/booking" element={<Booking/>}></Route>
                <Route exact path="/checkout" element={<Checkout/>}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}