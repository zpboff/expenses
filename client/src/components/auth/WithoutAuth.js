import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthProvider from '../../providers/authProvider';
import Preloader from '../shared/Preloader';

export default class WithAuth extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			redirect: false
		};
	}

	componentDidMount() {
		AuthProvider.CheckAuth(
			(res) => {
				if (res.status === 200) {
					this.setState({ loading: false, hasToken: true });
					return;
				}
				this.setState({ loading: false, hasToken: false });
			},
			(error) => {
				this.setState({ loading: false, hasToken: false });
			}
		);
	}
	render() {
		const { loading, hasToken } = this.state;
		const { componentToProtect: ChildComponent } = this.props;
		if (loading) {
			return <Preloader />;
		}
		if (hasToken) {
			<React.Fragment>
				<ChildComponent props={{ ...this.props }} />
			</React.Fragment>;
		}
		return null;
	}
}
