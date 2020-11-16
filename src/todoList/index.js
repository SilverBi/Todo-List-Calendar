import React from "react";
import TodoDate from "./todoDate";
import { useSelector } from "react-redux";
import TodoClearAll from "./todoClearAll";
import TodoListInput from "./todoInput";
import InitialHead from "./initialHead";
import "./style.css";

function TodoList({ selectedDate }) {
    let todos = useSelector(state => state);
    return (
        <div>
        <div className="todoHead">
            <InitialHead
            selectedDate={selectedDate}/>
        </div>
        
        <div className="buttons">
            <TodoListInput selectedDate={ selectedDate }/>
            <TodoClearAll selectedDate={ selectedDate }/>
        </div>

        <div className="todoDate">
            {todos.map(todo => {
                return (<TodoDate
                key={todo.id}
                todo={ todo }
                selectedDate={ selectedDate }/>)
            })}
        </div>
        </div>
    );
}

export default TodoList