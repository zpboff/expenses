import React, { Component } from "react";
import Popup from "./Popup";
import Modal from "../../constants/modals";
import { connect } from "react-redux";
import InputWithValidation from "../shared/InputWithValidation";
import { createOperation } from "../../actions/expenseActions";

class CreateOperationPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            title: "",
            amount: "",
            errors: {},
            isIncome: true
        };
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.createOperation({ ...this.state });
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
        var { isIncome, title, description, amount, errors } = this.state;
        return (
            <>
                <div className="container">
                    <h5>Добавление операции</h5>
                    <form className="col s12" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <InputWithValidation
                                    value={title}
                                    field="title"
                                    type="text"
                                    label="Заголовок"
                                    error={errors.title}
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
                                <InputWithValidation
                                    value={description}
                                    field="description"
                                    label="Описание"
                                    type="text"
                                    error={errors.description}
                                    onChange={this.handleInputChange.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <div className="switch reverse">
                                    <label>
                                        Доход
                                        <input
                                            type="checkbox"
                                            value={isIncome}
                                            onChange={e =>
                                                this.setState({
                                                    isIncome: !isIncome
                                                })
                                            }
                                        />
                                        <span className="lever" />
                                        Расход
                                    </label>
                                </div>
                            </div>
                            <div className="input-field col s6">
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
                popupName={Modal.CreateOperation}
                renderBody={this.renderBody}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        errors: {
            title: state.errors.title,
            description: state.errors.title,
            amount: state.errors.amount
        }
    };
};

export default connect(
    mapStateToProps,
    { createOperation }
)(CreateOperationPopup);
