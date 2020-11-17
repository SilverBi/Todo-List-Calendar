import { ADD_TODO, UPDATE_TODO, DELETE_TODO, CLEAR_ALL , IS_START} from "./actions";
import { todos } from "./states"

export let reducer = (state = todos, action) => {
    let newTodos = [...state];

    switch (action.type) {
        case ADD_TODO:
            newTodos.push(action.payload);
            return newTodos;

        case DELETE_TODO:
            let deleteIndex = newTodos.findIndex(todo=>(
                todo.date === action.selectedDate.format("YYYYMMDD") &&
                todo.id === action.payload
                ));
            newTodos.splice(deleteIndex, 1);
            return newTodos;

        case UPDATE_TODO:
                let updateIndex = newTodos.findIndex(todo=>(
                    todo.date === action.selectedDate.format("YYYYMMDD") &&
                    todo.id === action.payload.id
                    ));
                if (updateIndex !== -1) {
                    newTodos[updateIndex] = action.payload;
                    return newTodos;
                }

        case CLEAR_ALL:
            newTodos = newTodos.filter(todo=>todo.date !== action.payload.format("YYYYMMDD"));
            return newTodos;

        case IS_START:
            newTodos[0].start = action.payload;
            return newTodos;

        default:
            return state;
    }
}