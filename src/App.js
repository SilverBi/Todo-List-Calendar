import './App.css';
import React, { useState } from "react";
import moment from "moment";
import CalenderIndex from "./calendar/index";
import TodoListIndex from "./todoList/index";

export default function App() {
  let [ date , setDate] = useState(moment("20200101", "YYYYMMDD"));

    return (
      <div id="grid">
        <div className="leftSide">
          <CalenderIndex
          selectedDate={ date }
          onChangeDate={ setDate }
          /></div>

        <div className="rightSide">
          <TodoListIndex
          selectedDate={ date }
          /></div>
      </div>
    );
}