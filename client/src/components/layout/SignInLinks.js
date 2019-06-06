import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignInLinks extends Component {
	render() {
		return (
			<ul className="right hide-on-med-and-down">
				<li>
					<NavLink to="/signin">Вход</NavLink>
				</li>
				<li>
					<NavLink to="/signup">Регистрация</NavLink>
				</li>
			</ul>
		);
	}
}

export default SignInLinks;
