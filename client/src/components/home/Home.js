import React from "react";
import OperationList from "./OperationList";

export default function Home() {
    return (
        <div className="col s12 m6">
            <div className="section">
                <h5>Операции</h5>
                <p>
                    <OperationList />
                </p>
            </div>
        </div>
    );
}
