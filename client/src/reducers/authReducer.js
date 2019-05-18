import { AuthActions } from '../constants/actions';

export default (state = {}, action) => {
	switch (action.type) {
		case AuthActions.SignUp:
			return {
				isAuthenticated: true,
				user: action.user
			};
		case AuthActions.SignIn:
			return {
				isAuthenticated: true,
				user: action.user
			};
		default:
			return state;
	}
};
