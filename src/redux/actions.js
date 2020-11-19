export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const CLEAR_ALL = "CLEAR_ALL";
export const IS_START = "IS_START";

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function deleteTodo(todoId, selectedDate) {
    return {
        type: DELETE_TODO,
        payload: todoId,
        selectedDate: selectedDate,
    }
}

export function updateTodo(todo, selectedDate) {
    return {
        type: UPDATE_TODO,
        payload: todo,
        selectedDate: selectedDate,
    }
}

export function clearAllTodo(todoDate) {
    return {
        type: CLEAR_ALL,
        payload: todoDate,
    }
}

export function isStart(isStart) {
    return {
        type: IS_START,
        payload: isStart,
    }
}