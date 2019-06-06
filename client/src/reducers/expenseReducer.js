import { ExpenseActions } from '../constants/actions';

const initialState = {
	operations: [],
	goals: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ExpenseActions.SET_OPERATIONS:
			return {
				...state,
				operations: action.operations
			};
		case ExpenseActions.SET_BALANCE:
			return {
				...state,
				balance: action.balance
			};
		case ExpenseActions.ADD_OPERATION:
			return {
				...state,
				operations: state.operations.concat(action.operation)
			};
		case ExpenseActions.SET_GOALS:
			return {
				...state,
				goals: action.goals
			};
		case ExpenseActions.ADD_GOAL:
			return {
				...state,
				goals: state.goals.concat(action.goal)
			};
		default:
			return state;
	}
};
