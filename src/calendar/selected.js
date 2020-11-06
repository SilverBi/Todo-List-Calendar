    function isSelected(day, value) {
        return value.isSame(day, "day");
    }

    export default function dayStyles(day, value) {
        if (isSelected(day, value)) return "selected"

        return ""
    }