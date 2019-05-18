import React, { Component } from 'react';
import AuthProvider from '../../providers/authProvider';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
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
		AuthProvider.SignIn(this.state, (res) => {
			if (res.status === 200) {
                this.props.history.push('/');
                return;
            }
            
            throw new Error(res.error);
		});
	};

	render() {
		var { email, password } = this.state;
		return (
			<div className="container">
				<h5>Введите Email и пароль</h5>
				<form className="col s12" onSubmit={this.onSubmit}>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="email"
								name='email'
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
								name='password'
								type="password"
								className="validate"
								value={password}
								onChange={this.handleInputChange}
							/>
							<label htmlFor="password">Пароль</label>
						</div>
					</div>
					<input type="submit" className="waves-effect waves-light btn" value="Вход" />
				</form>
			</div>
		);
	}
}

export default SignIn;
