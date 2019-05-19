import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class Navbar extends Component {
	render() {
		const { isAuthenticated } = this.props;
		return (
			<nav>
				<div className="nav-wrapper">
					<NavLink to="/" className="brand-logo home-button">
						<i className="medium material-icons">home</i>
					</NavLink>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						{isAuthenticated  ? <SignOutLinks /> :<SignInLinks />}
					</ul>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
	isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Navbar);
