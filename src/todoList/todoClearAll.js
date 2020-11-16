import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions";
import { todos } from "../redux/states";

function TodoClearAll({ selectedDate }) {
    let dispatch = useDispatch();

    function hiddenclearButton() {
        if (todos[0].start===true){
            return "noneButton"
        }
        else return "clearAllButton"
    }

    return (
        <div>
            <button
            className={hiddenclearButton()}
            disabled={todos[0].start===true}
                onClick={()=>dispatch(actions.clearAllTodo(selectedDate))}
            >ClearAll</button>
        </div>
    )
}

export default TodoClearAll