import React, { Component } from 'react';
import AuthProvider from '../../providers/authProvider';
import { connect } from 'react-redux';
import { signIn } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}

    componentWillReceiveProps(nextProps) {

        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

	handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		AuthProvider.SignIn(this.state, (res) => {
			if (res.status === 200) {
				this.props.history.push('/');
				return;
			}

			throw new Error(res.error);
		});
	};

	render() {
		var { email, password, errors } = this.state;
		return (
			<div className="container">
				<h5>Введите Email и пароль</h5>
				<form className="col s12" onSubmit={this.onSubmit}>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="email"
								name="email"
								type="email"
								className={classnames('validate', {
									invalid: errors.email
								})}
								value={email}
								onChange={this.handleInputChange}
							/>
							<label htmlFor="email">Email</label>
							{errors.email && (<span class="helper-text red lighten-1">{errors.email}</span>)}
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="password"
								name="password"
								type="password"
								className={classnames('validate', {
									invalid: errors.password
								})}
								value={password}
								onChange={this.handleInputChange}
							/>
							<label htmlFor="password">Пароль</label>
							{errors.password && (<span class="helper-text red lighten-1">{errors.password}</span>)}
						</div>
					</div>
					<input type="submit" className="waves-effect waves-light btn" value="Вход" />
				</form>
			</div>
		);
	}
}

SignIn.propTypes = {
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (user) => dispatch(signIn(user))
	};
};

export  default connect(mapStateToProps, mapDispatchToProps)(SignIn)
