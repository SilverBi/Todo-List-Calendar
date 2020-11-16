import React from "react";

export default function Header({selectedDate, setMonth}) {
    function preMonth() {
        return selectedDate.clone().subtract(1, "month")
    }
    
    function nextMonth() {
        console.log("nextMonth : " + selectedDate.clone().add(1, "month").format(""));
        return selectedDate.clone().add(1, "month").startOf("day")
    }
    
    function nonePrevious() {
        return selectedDate.isSame("20200101", "month");
    }

    function noneNext() {
        return selectedDate.isSame("20201201", "month");
    }

    return (
    <div className="header">
        <div className="prevPagination"
            onClick={() => !nonePrevious() && setMonth(preMonth().startOf("month"))}
        >❮</div>

        <div className="headerName">
            {selectedDate.format("MMMM")}
            <span>&emsp;</span>
            {selectedDate.format("YYYY")}
        </div>

        <div className="nextPagination"
            onClick={() => !noneNext() && setMonth(nextMonth().startOf("month"))}
        >❯</div>
    </div>
    );
}