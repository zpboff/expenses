import React from "react";
import classnames from "classnames";

function OperationCard(props) {
    const { isIncome, description, amount, title } = props.operation;
    return (
        <li className="collection-item avatar">
            <i
                className={classnames("material-icons circle", {
                    "teal lighten-1": isIncome,
                    "coral": !isIncome
                })}
            >
                {isIncome ? "monetization_on" : "money_off"}
            </i>
            <span className="title">{title}</span>
            <p className='description'>{description}</p>
            <p>{amount}&nbsp;&#8381;</p>
        </li>
    );
>>>>>>> ebfb8b5778414fabea226a12cfa708ad5b3cbb5f
}

export default OperationCard;
