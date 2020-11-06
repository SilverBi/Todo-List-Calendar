import React, { useState, useEffect } from "react";
import SetCalendar from "./setCalendar";
import Header from "./header";
import Selected from "./selected";
import './style.css';
import './header.css';

export default function Index({ value, onChange }) {
    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        setCalendar(SetCalendar(value));
    }, [value]);

    return (
    <div className="calendar">
        <div className="head">
            <Header value={value} setValue={onChange}></Header>
        </div>

        <div className="body">
            <div className="day-names">
                {
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                        <div className="week">{d}</div>
                    ))}
            </div>

            {calendar.map((week) => (
            <div>
                {week.map((day) => (
                    <div className="day" onClick={() => (value).isSame(day, "month") && onChange(day)}>
                    <div className={Selected(day, value)}>
                    {day.format("D").toString()}</div>
                </div>
                ))}
            </div>))}
        </div>
    </div>);
}