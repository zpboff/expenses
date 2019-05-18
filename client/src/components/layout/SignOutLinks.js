import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignOutLinks extends Component {
	render() {
		return (
			<React.Fragment>
				<li>
					<NavLink href="/">Расходы</NavLink>
				</li>
				<li>
					<NavLink href="/">Графики</NavLink>
				</li>
				<li>
					<NavLink href="/">Итоги</NavLink>
				</li>
				<li>
					<NavLink href="/">Цели</NavLink>
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
