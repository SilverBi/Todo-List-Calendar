import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SetCalendar from "./setCalendar";
import Header from "./header";
import Selected from "./isSelected";
import './style.css';
import './header.css';
import * as actions from "../redux/actions";

export default function Index({ selectedDate, onChangeDate }) {
    let [calendar, setCalendar] = useState([]);
    let dispatch = useDispatch();

    useEffect(() => {
        setCalendar(SetCalendar(selectedDate));
    }, [selectedDate]);

    return (
    <div className="calendar">
        <div className="head">
            <Header selectedDate={selectedDate} setMonth={onChangeDate}></Header>
        </div>

        <div className="body">
            <div className="day-names">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                        <div className="week">{d}</div>
                    ))}
            </div>

            {calendar.map((week) => (
            <div>
                {week.map((day) => (
                    <div className="day"
                    onClick={() => {(selectedDate).isSame(day, "month") && onChangeDate(day);
                    dispatch(actions.isStart(false));
                    }}
                    ><div className={Selected(day, selectedDate)}>
                    {day.format("D").toString()}</div>
                </div>))}
            </div>))}
        </div>
    </div>);

}