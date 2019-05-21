import { ExpenseActions } from '../constants/actions';

export default (state = {}, action) => {
	switch (action.type) {
		case ExpenseActions.SET_OPERATIONS:
			return {
				...state,
				operations: action.operations
			};
		default:
			return state;
	}
};
