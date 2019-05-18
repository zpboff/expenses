import React, { Component } from 'react';
import AuthProvider from '../../providers/authProvider';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			lastName: '',
			firstName: ''
		};
	}

	handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		AuthProvider.SignUp(this.state, (res) => {
			if (res.status === 200) {
				this.props.history.push('/');
				return;
			}

			throw new Error(res.error);
		});
	};

	render() {
		var { email, password, lastName, firstName } = this.state;
		return (
			<div className="container">
				<h5>Введите данные</h5>
				<form className="col s12" onSubmit={this.onSubmit}>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="email"
								name="email"
								type="email"
								className="validate"
								value={email}
								onChange={this.handleInputChange}
							/>
							<label htmlFor="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="password"
								name="password"
								type="password"
								className="validate"
								value={password}
								onChange={this.handleInputChange}
							/>
							<label htmlFor="password">Пароль</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s6">
							<input
								id="firstName"
								name="firstName"
								type="text"
								className="validate"
								value={firstName}
								onChange={this.handleInputChange}
							/>
							<label htmlFor="firstName">Имя</label>
						</div>
						<div className="input-field col s6">
							<input
								id="lastName"
								name="lastName"
								type="text"
								className="validate"
								value={lastName}
								onChange={this.handleInputChange}
							/>
							<label htmlFor="lastName">Фамилия</label>
						</div>
					</div>
					<input type="submit" className="waves-effect waves-light btn" value="Регистрация" />
				</form>
			</div>
		);
	}
}

export default SignUp;
