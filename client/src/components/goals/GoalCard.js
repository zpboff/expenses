import React, { Component } from "react";
import classnames from "classnames";

class GoalCard extends Component {
    render() {
        const { amount, finishDate } = this.props.goal;
        return (
            <div id={this.props.id}>
                {`${amount} - ${finishDate}`}
            </div>
        );
    }
}

export default GoalCard;
