import classnames from "classnames";
import React from "react";
import EventCard from "./EventCard";
import EventList from "./EventList";

export default function Home() {
    return (
        <div className="col s12 m6">
            <div className="section">
                <EventList />
            </div>
        </div>
    );
}
