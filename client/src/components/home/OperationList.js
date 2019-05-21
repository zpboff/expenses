import React from "react";
import OperationCard from "./OperationCard";

export default function OperationList() {
    const events = [
        {
            isIncome: true,
            description: "Получение зарплаты",
            sum: 1
        },
        {
            isIncome: false,
            description: "Поход в KFC",
            sum: 2
        }
    ];
    return (
        <ul class="collection">
            {events && events.map(x => <OperationCard event={x} />)}
        </ul>
    );
}
