import React from "react";
import moment from "moment";

function GoalCard(props) {
    const { target, amount, finishDate, createDate } = props.goal;
    return (
        <span className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{target}</h5>
                <small>{moment(createDate).fromNow()}</small>
            </div>
            <p className="mb-1">Сумма: {amount}&#8381;</p>
            <p className="mb-1">До: {moment(finishDate).endOf('days').fromNow()}</p>
            <small>Осталось: дофига</small>
        </span>
    );
}

export default GoalCard;
