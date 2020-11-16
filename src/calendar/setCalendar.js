export default function setCalendar(selectedDate) {
    let startDay = selectedDate.clone().startOf("month").startOf("week");
    let endDay = selectedDate.clone().endOf("month").endOf("week");
    let day = startDay.clone().subtract(1, "day");

    let calendar = [];

    while(day.isBefore(endDay, "day")) {
        calendar.push(
            Array(7)
                .fill(0)
                .map(() => day.add(1,"day").clone())
        );
    }
    return calendar;
}