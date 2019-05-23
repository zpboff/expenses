import React, { Component } from "react";
import Popup from "./Popup";
import Modal from "../../constants/modals";
import { connect } from "react-redux";
import InputWithValidation from "../shared/InputWithValidation";
import { createGoal } from "../../actions/expenseActions";

class CreateGoalPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: "",
            amount: "",
            errors: {},
            finishDate: new Date()
        };
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.createGoal({ ...this.state });
    };

    handleInputChange(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    renderBody = () => {
        var { finishDate, target, amount, errors } = this.state;
        return (
            <>
                <div className="container">
                    <h5>Добавление цели</h5>
                    <form className="col s12" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <InputWithValidation
                                    value={target}
                                    field="target"
                                    type="text"
                                    label="Цель"
                                    error={errors.target}
                                    onChange={this.handleInputChange.bind(this)}
                                />
                            </div>
                            <div className="input-field col s6">
                                <InputWithValidation
                                    value={amount}
                                    field="amount"
                                    type="number"
                                    label="Сумма"
                                    error={errors.amount}
                                    onChange={this.handleInputChange.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button class="btn waves-effect waves-light" type="submit" name="action">
                                    Добавить
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    };

    render() {
        return (
            <Popup
                props={{ ...this.props }}
                popupName={Modal.CreateGoal}
                renderBody={this.renderBody}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        errors: {
            target: state.errors.target,
            amount: state.errors.amount
        }
    };
};

export default connect(mapStateToProps, { createGoal })(CreateGoalPopup);
