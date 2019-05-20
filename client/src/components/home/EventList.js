import classnames from "classnames";
import React from "react";
import EventCard from "./EventCard";

export default function EventList() {
    const events = [
        {
            isIncome: true,
            description: "Получение зарплаты"
        },
        {
            isIncome: false,
            description: "Поход в KFC"
        }
    ];
    return (
        <ul class="collection">
            {events && events.map(x => <EventCard event={x} />)}
        </ul>
    );
}
