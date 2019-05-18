import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignOutLinks extends Component {
	render() {
		return (
			<React.Fragment>
				<li>
					<NavLink to="/">Расходы</NavLink>
				</li>
				<li>
					<NavLink to="/">Графики</NavLink>
				</li>
				<li>
					<NavLink to="/">Итоги</NavLink>
				</li>
				<li>
					<NavLink to="/">Цели</NavLink>
				</li>
				<li>
					<NavLink to="/" className="btn btn-floating">
						ПЗ
					</NavLink>
				</li>
			</React.Fragment>
		);
	}
}

export default SignOutLinks;
