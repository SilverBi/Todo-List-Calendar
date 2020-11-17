import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions";
import Popup from "reactjs-popup";
import TimeField from 'react-simple-timefield';
import "./todoDate.css";
import deleteImage from "../images/delete_image.png";
import editImage from "../images/edit_image.png";

function TodoDate({ todo , selectedDate }) {
    const [work, setName] = useState(todo.work);
    const [time, setTime] = useState(todo.time);
    let dispatch = useDispatch();

    if (todo.date === selectedDate.format("YYYYMMDD")) {
        return (
        <div className="workListView">
            <div className="ListView">
                <div className="timeList">
                    {todo.time}
                </div>
                <div className="workList">
                    {todo.work}
                </div>
            </div>

            <Popup
            trigger={<button
            className="editButton"
            style={{
                backgroundImage: "url("+editImage+")",
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "20px",
                width: "20px",
            }}
            ></button>}>
                <div
                className="EditForm">

                <label className="editTime"
                >time : 
                <span>&nbsp;</span>
                <TimeField
                    value={time || ""}
                onChange={(e) => setTime(e.target.value)}/>
                </label>

                <label className="editWork"
                >work : 
                <span>&nbsp;</span>
                <input type="text"
                value={work || ""}
                onChange={(e) => setName(e.target.value)}/>
                </label>

                <button
                className="editUpdateButton"
                    onClick={()=> {
                        dispatch(actions.updateTodo(
                            {
                                ...todo,
                                work: work,
                                time: time,
                                date: selectedDate.format("YYYYMMDD"),
                            }, selectedDate
                        ));
                    }}
                >Update</button>
                </div>
            </Popup>
            
            <button className={"deleteButton"}
            style={{
                backgroundImage: "url("+deleteImage+")",
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "20px",
                width: "20px",
            }}
                onClick={()=>dispatch(actions.deleteTodo(todo.id, selectedDate))}
            ></button>
        </div>
        );
    }

    return '';
}

export default TodoDate