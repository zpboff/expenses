import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions'
import { connect } from 'react-redux'
	
class SignOutLinks extends Component {

	onLogout = (e) => {
		e.preventDefault();
		this.props.logoutUser(this.props.history);
	};

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
					<span onClick={this.onLogout} className="btn btn-floating">
						ПЗ
					</span>
				</li>
			</React.Fragment>
		);
	}
}

SignOutLinks.propTypes = {
    logoutUser: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
	return {
		logout: history => dispatch(logout(history))
	}
}

export default connect(null, mapDispatchToProps)(withRouter(SignOutLinks));
