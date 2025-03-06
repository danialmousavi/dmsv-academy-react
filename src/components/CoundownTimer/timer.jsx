import React, { useState, useEffect } from "react";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import './Timer.css'
import { Link } from "react-router-dom";
const CountdownTimer = ({ eventDate }) => {
    const calculateTimeLeft = () => {
        const now = moment();
        const eventMoment = moment(eventDate);
        const duration = moment.duration(eventMoment.diff(now));

        return {
            days: Math.floor(duration.asDays()),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [eventDate]);

    return (
        <div className="container text-center mt-5 countdown-container">


            <div className="row justify-content-center mt-3 countdown-boxes">
                <div className="countdown-item">
                    <h2>{timeLeft.days}</h2>
                    <p>Days</p>
                </div>
                <div className="countdown-item">
                    <h2>{timeLeft.hours}</h2>
                    <p>Hours</p>
                </div>
                <div className="countdown-item">
                    <h2>{timeLeft.minutes}</h2>
                    <p>Minutes</p>
                </div>
                <div className="countdown-item">
                    <h2>{timeLeft.seconds}</h2>
                    <p>Seconds</p>
                </div>
            </div>
            <h1 className="text-white mt-3">Wait for good news!</h1>
            <h3 className="text-white mt-3">Register to undestand sooner</h3>
            <Link variant="outline-warning" className="btn btn-outline-warning text-center d-flex align-items-center justify-content-center w-100 h-50" to='/register' >Register</Link>

        </div>
    );
};

export default CountdownTimer;
