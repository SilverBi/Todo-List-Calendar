import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { todos } from "../redux/states";
import Popup from "reactjs-popup";
import TimeField from 'react-simple-timefield';
import "./style.css"

function TodoInput({selectedDate}) {
    let [work, setWork] = useState();
    let [time, setTime] = useState();
    let dispatch = useDispatch();

    function hiddenAddButton() {
        if (todos[0].start===true){
            return "noneButton"
        }
        else return "addButton"
    }

    return (
        <div className="todoInput">
            <Popup
            trigger={<button
                className={hiddenAddButton()}
            >Add</button>}>
            
            <div className="addForm">
            <div className="addFormHeader">{selectedDate.format("YYYY.MM.DD")}</div>
                <label
                className="inputTime"
                > time :
                <span>&nbsp;</span>
                <TimeField
                    value={time || ""}
                    onChange={(e)=>{
                    setTime(e.target.value)}}
                />
                </label>

                <label
                className="inputWork"
                > work :
                <span>&nbsp;</span>
                <input
                    onChange={(e)=>setWork(e.target.value) }
                    value={work || ''}
                    type="text" />
                </label>

                <button
                className="addUpdateButton"
                
                onClick={() => {
                    if (time === undefined || time === "") time="00:00"
                    if (work === undefined || work === "") work="Nothing to do"
                    dispatch(addTodo({
                            id: uuid(),
                            time: time,
                            work: work,
                            date: selectedDate.format("YYYYMMDD"),
                        }));
                    setWork('');
                    setTime('');
                }}
                >Update</button>
            </div>
            </Popup>
        </div>
    );
}

export default TodoInput