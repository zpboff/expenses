import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignOutLinks extends Component {
	onLogout = (e) => {
		e.preventDefault();
		this.props.logoutUser(this.props.history);
	};

	render() {
		const { isAuthenticated, user } = this.props.auth;
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

SignOutLinks.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	isAuthenticated : state.auth.isAuthenticated,
	user: state.auth.user
})

export default connect(mapStateToProps, { logoutUser })(withRouter(SignOutLinks));
