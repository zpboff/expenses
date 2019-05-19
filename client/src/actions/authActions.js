import axios from 'axios';
import { ErrorActions, AuthActions } from '../constants/actions';
import AuthProvider from '../providers/authProvider';
import jwt_decode from 'jwt-decode';

export const signUp = (user, history) => (dispatch) => {
	axios.post('/auth/signup', user).then((res) => history.push('/login')).catch((err) => {
		dispatch({
			type: ErrorActions.GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const signIn = (user) => (dispatch) => {
	axios
		.post('/auth/signin', user)
		.then((res) => {
			const { token } = res.data;
			localStorage.setItem('jwtToken', token);
			AuthProvider.SetAuthToken(token);
			const decoded = jwt_decode(token);
			dispatch({
				type: AuthActions.SET_CURRENT_USER,
				payload: decoded
			});
		})
		.catch((err) => {
			dispatch({
				type: ErrorActions.GET_ERRORS,
				payload: err.response.data
			});
		});
};
