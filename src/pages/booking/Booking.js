import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import './Booking.css';

const timeAM = [7, 8, 9, 10, 11];
const timePM = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const allMinutes = [0, 15, 30, 45];

export default function Booking() {
    const [date, setDate] = useState(null);
    const [hours, setHours] = useState(7);
    const [minutes, setMinutes] = useState(0);
    const [amOrPm, setAmOrPm] = useState("AM");

    function handleTime(hrs, mins, amPm) {
        setHours(hrs);
        setMinutes(mins);
        setAmOrPm(amPm);
        console.log(date.toString().split(" ")[0]);
    }

    return (
        <div className='booking-contents'>
            <h1>Please create a booking with us!</h1>
            <div className="booking-details">
                <div className="picker-container">
                    <DatePicker selected={date} onSelect={date => setDate(date)} onChange={date => setDate(date)} placeholderText="Select a date"></DatePicker>
                </div>
                <DropdownButton title={minutes === 0 ? hours + ":" + minutes + minutes + " " + amOrPm : hours + ":" + minutes + " " + amOrPm}>
                    {
                        timeAM.map(hours => {
                            return (allMinutes.map((mins, index) => {
                                return <Dropdown.Item onClick={() => handleTime(hours, mins, "AM")} key={index}>{mins === 0 ? hours + ":" + mins + mins + " AM" : hours + ":" + mins + " AM"}</Dropdown.Item>
                            }))
                        })
                    }
                    {
                        timePM.map(hours => {
                            return (allMinutes.map((mins, index) => {
                                return <Dropdown.Item onClick={() => handleTime(hours, mins, "PM")} key={index}>{mins === 0 ? hours + ":" + mins + mins + " PM" : hours + ":" + mins + " PM"}</Dropdown.Item>
                            }))
                        })
                    }
                </DropdownButton>
                <input type="number" placeholder='Select duration'></input>
            </div>
        </div>
    )
}