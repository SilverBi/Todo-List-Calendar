import { ADD_TODO, UPDATE_TODO, DELETE_TODO, CLEAR_ALL , IS_START} from "./actions";
import { todos } from "./states"

export let reducer = (state = todos, action) => {
    let newTodos;

    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;

        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo=>todo.id !== action.payload)
            return newTodos;
            
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;

            for(let i = 0; i<newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }
            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }

        case CLEAR_ALL:
            newTodos = [...state];
            newTodos = newTodos.filter(todo=>todo.date !== action.payload.format("YYYYMMDD"))
            return newTodos;

        case IS_START:
            newTodos = [...state];
            newTodos[0].start = action.payload;
            return newTodos;

        default:
            return state;
    }
}