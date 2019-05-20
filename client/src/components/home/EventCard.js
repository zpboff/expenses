import React, { Component } from "react";
import classnames from "classnames";

class EventCard extends Component {
    getIcon = isIncome => {
        return isIncome ? "monetization_on" : "money_off";
    };

    render() {
        const { event } = this.props;
        return (
            <li class="collection-item avatar">
                <i
                    className={classnames("material-icons circle", {
                        'teal lighten-1': event.isIncome,
                        'red darken-1': !event.isIncome
                    })}
                >
                    {this.getIcon(event.isIncome)}
                </i>
                <span class="title">{event.isIncome ? 'Доход' : 'Расход'}</span>
                <p>{event.description}</p>
                <a href="#!" class="secondary-content">
                    <i class="material-icons">grade</i>
                </a>
            </li>
        );
    }
}

export default EventCard;
