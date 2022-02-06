import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { Button, Dropdown, DropdownButton, Alert } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import './Booking.css';
import estimation from '../../assets/estimation.jpg';
import consultation from '../../assets/consultation.jpg';
import implementation from '../../assets/implementation.jpg';

const timeAM = [7, 8, 9, 10, 11];
const timePM = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const allMinutes = [0, 15, 30, 45];

export default function Booking() {
    const [date, setDate] = useState(null);
    const [hours, setHours] = useState(7);
    const [minutes, setMinutes] = useState(0);
    const [amOrPm, setAmOrPm] = useState("AM");
    const [duration, setDuration] = useState(0);

    const [time, setTime] = useState("Select a time");
    const [option, setOption] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertField, setAlertField] = useState("");

    function handleTime(hrs, mins, amPm) {
        setHours(hrs);
        setMinutes(mins);
        setAmOrPm(amPm);
        setTime(
            minutes === 0 ? hours + ":" + minutes + minutes + " " + amOrPm : hours + ":" + minutes + " " + amOrPm
        )
    }

    function handleTransaction() {
        let hoursLeft = amOrPm === "AM" ? 11 + (12 - hours) : 11 - hours;
        if (minutes > 0) hoursLeft--;

        if (date == null) {
            setAlertField("Please enter a valid date");
            setShowAlert(true);
        } else if (duration === 0 || duration > hoursLeft) {
            setAlertField("Please enter a valid duration");
            setShowAlert(true);
        } else if (option === "") {
            setAlertField("Please select a booking type");
            setShowAlert(true);
        }

        window.location.replace()
    }

    function closeAlert() {
        setShowAlert(false);
        setAlertField("");
    }

    return (
        <div className='booking-contents'>
            <h1>Booking Details</h1>
            <div className="booking-details">
                <div className="picker-container">
                    <DatePicker selected={date} onSelect={date => setDate(date)} onChange={date => setDate(date)} placeholderText="Select a date"></DatePicker>
                </div>
                <DropdownButton variant="secondary" title={time}>
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
                <input type="number" placeholder='Select duration' onChange={(e) => setDuration(e.target.value)}></input>
            </div>
            <div className="booking-options">
                <div id="option">
                    <h4>Consultation</h4>
                    <button className={option === "Consultation" ? "selected" : ""} onClick={() => setOption("Consultation")}>
                        <img src={consultation} id="option-img"alt="Consultation"></img>
                    </button>
                </div>
                <div id="option">
                    <h4>Estimation</h4>
                    <button className={option === "Estimation" ? "selected" : ""} onClick={() => setOption("Estimation")}>
                        <img src={estimation} id="option-img" alt="Estimation"></img>
                    </button>
                </div>
                <div id="option">
                    <h4>Implementation</h4>
                    <button className={option === "Implementation" ? "selected" : ""} onClick={() => setOption("Implementation")}>
                        <img src={implementation} id="option-img"alt="Implementation"></img>
                    </button>
                </div>
            </div>
            <Button variant="success" className="booking-button" onClick={handleTransaction}>
                Submit
            </Button>
            <Alert variant="danger" onClose={closeAlert} dismissible className={showAlert === true ? "booking-button" : "booking-button hide"}>
                <Alert.Heading>{alertField}</Alert.Heading>
            </Alert>
        </div>
    )
}