import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions'
import { connect } from 'react-redux'
import { getBalance } from '../../actions/expenseActions';

class SignOutLinks extends Component {

	componentDidMount() {
		this.props.getBalance();
	}

	onLogout = (e) => {
		e.preventDefault();
		this.props.logout(this.props.history);
	};

	render() {
		const { initials, balance } = this.props;
		return (
			<ul className="right hide-on-med-and-down">
				<li className='balance'>
					<i className="medium material-icons">credit_card</i>
				</li>
				<li className='balance-value'>
					{balance} &#8381;
				</li>
				<li>
					<span onClick={this.onLogout} className="btn btn-floating">
						{initials}
					</span>
				</li>
			</ul>
		);
	}
}

SignOutLinks.propTypes = {
	logout: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	return {
		initials: state.auth.user.initials,
		balance: state.expenses.balance
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: history => dispatch(logout(history)),
		getBalance: () => dispatch(getBalance())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignOutLinks));
