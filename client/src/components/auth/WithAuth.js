import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthProvider from '../../providers/authProvider';
import Preloader from '../shared/Preloader';

export default class WithAuth extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			hasToken: false
		};
	}

	componentDidMount() {
		AuthProvider.CheckAuth(
			(res) => {
				if (res.status === 200) {
					this.setState({ loading: false });
					return;
				}
				this.setState({ loading: false, hasToken: true });
			},
			(error) => {
				this.setState({ loading: false, hasToken: true });
			}
		);
	}
	render() {
		const { loading, hasToken } = this.state;
		const { componentToProtect: ChildComponent, withoutRedirect } = this.props;
		if (loading) {
			return <Preloader />;
		}
		if (hasToken) {
			return withoutRedirect ? null : <Redirect to="/login" />;
		}
		return (
			<React.Fragment>
				<ChildComponent props={{ ...this.props }} />
			</React.Fragment>
		);
	}
}
