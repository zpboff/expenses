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
        <div className="col s12 m6">
            <div className="section">
                <h5>Операции</h5>
                <p>
                    <ul class="collection">
                        {events && events.map((x,i) => <OperationCard key={`operation-${i}`} event={x} />)}
                    </ul>
                </p>
            </div>
        </div>
    );
}
