import React, { Component } from "react";
import classnames from "classnames";

class EventCard extends Component {
    render() {
        const { isIncome, description, sum } = this.props.event;
        return (
            <li class="collection-item avatar">
                <i
                    className={classnames("material-icons circle", {
                        "teal lighten-1": isIncome,
                        "red darken-1": !isIncome
                    })}
                >
                    {isIncome ? "monetization_on" : "money_off"}
                </i>
                <span class="title">{isIncome ? "Доход" : "Расход"}</span>
                <p>{description}</p>
                <p>{sum}&nbsp;&#8381;</p>
                <a href="#!" class="secondary-content">
                    <i class="material-icons">forward</i>
                </a>
            </li>
        );
    }
}

export default EventCard;
