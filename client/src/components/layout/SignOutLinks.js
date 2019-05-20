import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions'
import { connect } from 'react-redux'
	
class SignOutLinks extends Component {

	onLogout = (e) => {
		e.preventDefault();
		this.props.logout(this.props.history);
	};

	render() {
		const { initials } = this.props;
		return (
			<React.Fragment>
				<li>
					<NavLink to="/graphics">Графики</NavLink>
				</li>
				<li>
					<span onClick={this.onLogout} className="btn btn-floating">
						{initials}
					</span>
				</li>
			</React.Fragment>
		);
	}
}

SignOutLinks.propTypes = {
    logout: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	return {
		initials: state.auth.user.initials
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: history => dispatch(logout(history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignOutLinks));
