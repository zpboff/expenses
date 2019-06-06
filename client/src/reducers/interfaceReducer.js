import { InterfaceActions } from '../constants/actions';
import Components from '../constants/components';

const getInitialComponetsState = () => {
	return {
		isLoading: true
	}
}

const getInitialState = () => {
	var initialState = {};
	Object.keys(Components).forEach(x => initialState[x] = getInitialComponetsState())
	return initialState;
}

export default (state = getInitialState(), action) => {
	switch (action.type) {
		case InterfaceActions.SET_COMPONENT_LOADING:
			return {
				...state,
				[action.componentName]: {
					...state[action.componentName],
					isLoading: action.value
				}
			};
		default:
			return state;
	}
};
