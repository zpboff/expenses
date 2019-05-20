import classnames from "classnames";
import React from "react";
import EventCard from "./EventCard";

export default function EventList() {
    const events = [
        {
            isIncome: true,
            description: "Получение зарплаты",
            sum: 17500
        },
        {
            isIncome: false,
            description: "Поход в KFC",
            sum: 600
        }
    ];
    return (
        <ul class="collection">
            {events && events.map(x => <EventCard event={x} />)}
        </ul>
    );
}
