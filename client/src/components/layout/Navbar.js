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
					<ul className="left hide-on-med-and-down">
						<li>
							<NavLink to="/">
								<i className="medium material-icons">home</i>
							</NavLink>
						</li>
						{isAuthenticated && (
							<li>
								<NavLink to="/graphics">Графики</NavLink>
							</li>
						)}
					</ul>
					{isAuthenticated ? <SignOutLinks /> : <SignInLinks />}
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Navbar);
