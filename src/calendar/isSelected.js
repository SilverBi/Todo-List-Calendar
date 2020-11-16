import { todos } from "../redux/states";
    
function isSelected(day, selectedDate) {
    return selectedDate.isSame(day, "day");
}

export default function dayStyles(day, selectedDate) {
    if (todos[0].start === false) {
        if (isSelected(day, selectedDate)) {
            return ("selected");
        }
    }

    return "";
}