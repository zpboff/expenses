import React, { Component } from 'react'
import Popup from './Popup'
import Modal from '../../constants/modals';
import classnames from "classnames";
import { connect } from 'react-redux'

class CreateOperationPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            amount: '',
            errors: {}
        };
    }

    onSubmit = event => {
        event.preventDefault();
        //this.props.signIn({ ...this.state });
    };

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated) {
            this.props.history.push("/");
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };

    renderBody = () => {
        var { title, description, amount, errors } = this.state;
        return (
            <>
                <div className="container">
                    <h5>Введите Email и пароль</h5>
                    <form className="col s12" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    className={classnames("validate", {
                                        invalid: errors.email
                                    })}
                                    value={title}
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="title">Заголовок</label>
                                {errors.title && (
                                    <span className="helper-text red lighten-1">
                                        {errors.title}
                                    </span>
                                )}
                            </div>                            
                            <div className="input-field col s6">
                                <input
                                    id="amount"
                                    name="amount"
                                    type="text"
                                    className={classnames("validate", {
                                        invalid: errors.amount
                                    })}
                                    value={amount}
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="amount">Заголовок</label>
                                {errors.amount && (
                                    <span className="helper-text red lighten-1">
                                        {errors.amount}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="description"
                                    name="description"
                                    type="text"
                                    className={classnames("validate", {
                                        invalid: errors.email
                                    })}
                                    value={description}
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="description">Заголовок</label>
                                {errors.description && (
                                    <span className="helper-text red lighten-1">
                                        {errors.description}
                                    </span>
                                )}
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="waves-effect waves-light btn"
                            value="Вход"
                        />
                    </form>
                </div>
            </>
        )
    }

    render() {
        return (
            <Popup popupName={Modal.CreateOperation} renderBody={this.renderBody} />
        )
    }
}

const mapStateToProps = state => {
    return {
        errors: state.errors,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(null)(CreateOperationPopup)