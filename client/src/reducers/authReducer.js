import { AuthActions } from '../constants/actions';
import ValidationHelper from '../helpers/validationHelper'

export default (state = {}, action) => {
	switch (action.type) {
		case AuthActions.SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !ValidationHelper.IsEmpty(action.payload),
				user: action.payload
			};
		default:
			return state;
	}
};
