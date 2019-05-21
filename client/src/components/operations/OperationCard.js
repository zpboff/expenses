import React, { Component } from "react";
import classnames from "classnames";

class OperationCard extends Component {
    render() {
        const { isIncome, description, amount, title } = this.props.operation;
        return (
            <li className="collection-item avatar">
                <i
                    className={classnames("material-icons circle", {
                        "teal lighten-1": isIncome,
                        "red darken-1": !isIncome
                    })}
                >
                    {isIncome ? "monetization_on" : "money_off"}
                </i>
                <span className="title">{title}</span>
                <p className='description'>{description}</p>
                <p>{amount}&nbsp;&#8381;</p>
            </li>
        );
    }
}

export default OperationCard;
