import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignInLinks extends Component {
	render() {
		return (
			<React.Fragment>
				<li>
					<NavLink to="/signin">Вход</NavLink>
				</li>
				<li>
					<NavLink to="/signup">Регистрация</NavLink>
				</li>
			</React.Fragment>
		);
	}
}

export default SignInLinks;
