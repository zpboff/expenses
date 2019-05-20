import React from "react";
import EventList from "./EventList";

export default function Home() {
    return (
        <div className="col s12 m6">
            <div className="section">
                <h5>Операции</h5>
                <p>
                    <EventList />
                </p>
            </div>
        </div>
    );
}
