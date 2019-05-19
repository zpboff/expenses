import { ErrorActions } from '../constants/actions';

export default (state = {}, action) => {
	switch (action.type) {
		case ErrorActions.GET_ERRORS:
			return action.payload;
		default:
			return state;
	}
};
