import React from "react";
import moment from "moment";

export default function Header({value, setValue}) {

    function monthName() {
        return value.format("MMMM")
    }
    
    function YearName() {
        return value.format("YYYY")
    }
    
    function preMonth() {
        return value.clone().subtract(1, "month")
    }
    
    function nextMonth() {
        return value.clone().add(1, "month")
    }
    
    function nonePrevious() {
        return value.isSame(moment("20200101"), "month");
    }

    function noneNext() {
        return value.isSame(moment("20201201"), "month");
    }

    return (
    <div className="header">
        <div className="prevPagination"
            onClick={() => !nonePrevious() && setValue(preMonth())}
        >❮</div>

        <div className="headerName">
            {monthName()} <span>&emsp;</span> {YearName()}
        </div>

        <div className="nextPagination"
            onClick={() => !noneNext() && setValue(nextMonth())}
            
        >❯</div>
        
    </div>
    );
}