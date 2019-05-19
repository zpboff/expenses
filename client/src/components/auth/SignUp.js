import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { signup } from "../../actions/authActions";
import { connect } from "react-redux";
import classnames from "classnames";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            lastName: "",
            firstName: "",
            passwordConfirm: "",
            errors: {}
        };
    }

    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.signup({ ...this.state }, this.props.history);
    };

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

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    render() {
        var {
            email,
            password,
            passwordConfirm,
            lastName,
            firstName,
            errors
        } = this.state;
        return (
            <div className="container">
                <h5>Регистрация</h5>
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={classnames("validate", {
                                    invalid: errors.email
                                })}
                                value={email}
                                onChange={this.handleInputChange}
                            />
                            <label htmlFor="email">Email</label>
                            {errors.email && (
                                <span className="helper-text red lighten-1">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className={classnames("validate", {
                                    invalid: errors.password
                                })}
                                value={password}
                                onChange={this.handleInputChange}
                            />
                            <label htmlFor="password">Пароль</label>
                            {errors.password && (
                                <span className="helper-text red lighten-1">
                                    {errors.password}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="passwordConfirm"
                                name="passwordConfirm"
                                type="password"
                                className={classnames("validate", {
                                    invalid: errors.passwordConfirm
                                })}
                                value={passwordConfirm}
                                onChange={this.handleInputChange}
                            />
                            <label htmlFor="passwordConfirm">
                                Подтверждение пароля
                            </label>
                            {errors.passwordConfirm && (
                                <span className="helper-text red lighten-1">
                                    {errors.passwordConfirm}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                className={classnames("validate", {
                                    invalid: errors.firstName
                                })}
                                value={firstName}
                                onChange={this.handleInputChange}
                            />
                            <label htmlFor="firstName">Имя</label>
                            {errors.firstName && (
                                <span className="helper-text red lighten-1">
                                    {errors.firstName}
                                </span>
                            )}
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                className={classnames("validate", {
                                    invalid: errors.lastName
                                })}
                                value={lastName}
                                onChange={this.handleInputChange}
                            />
                            <label htmlFor="lastName">Фамилия</label>
                            {errors.lastName && (
                                <span className="helper-text red lighten-1">
                                    {errors.lastName}
                                </span>
                            )}
                        </div>
                    </div>
                    <button
                        className="btn waves-effect waves-light btn-large"
                        type="submit"
                        name="action"
                    >
                        Зарегистрироваться
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
}

SignUp.propTypes = {
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    errors: state.errors,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    signup: (user, history) => dispatch(signup(user, history))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SignUp));
