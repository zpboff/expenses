import AuthProvider from '../providers/authProvider';
import { AuthActions } from '../constants/actions';

export const signIn = (user) => (dispatch) => {
	AuthProvider.SignIn(
		user,
		dispatch({
			type: AuthActions.SignIn
		}),
		dispatch({
			type: AuthActions.AuthError
		})
	);
};

export const signUp = (user) => (dispatch) => {
	AuthProvider.SignUp(
		user,
		dispatch({
			type: AuthActions.SignUp
		}),
		dispatch({
			type: AuthActions.AuthError
		})
	);
};

export const logout = (user) => (dispatch) => {
	dispatch({
		type: AuthActions.Logout
	});
};
