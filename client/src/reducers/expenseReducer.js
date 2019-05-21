import { ExpenseActions } from '../constants/actions';

export default (state = {}, action) => {
	switch (action.type) {
		case ExpenseActions.SET_OPERATIONS:
			return {
				...state,
				operations: action.operations
			};
		case ExpenseActions.ADD_OPERATION:
			return {
				...state,
				operations: state.operations.concat(action.operation)
			};
		default:
			return state;
	}
};
