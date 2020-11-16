import { todos } from "../redux/states";

function initialHead({ selectedDate }) {
    if (todos[0].start == false ) {
        return (
            <div>
                <div className="weekHead">
                    {selectedDate.format("ddd")}
                </div>

                <div className="dateHead">
                    {selectedDate.format("D")}
                </div>
            </div>
        )
    } else
        return null;
}

export default initialHead