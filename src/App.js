import './App.css';
import React, { useState } from "react";
import moment from "moment";
import CalenderIndex from "./calendar/Index";

export default function App() {
  const [value, setValue] = useState(moment("20200101", "YYYYMMDD"));

    return (
      <div id="grid">
        <div className="leftSide">
          <CalenderIndex value={value} onChange={setValue}></CalenderIndex>
        </div>

        <div className="rightSide">

        </div>
      </div>
    );
}