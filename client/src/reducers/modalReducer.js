import { ModalActions } from '../constants/actions';
import Modal from '../constants/modals';

const getInitialModalState = () => {
	return {
		isLoading: false,
		isOpened: false,
		data: {}
	}
}

const getInitialState = () => {
	var initialState = {};
	Object.keys(Modal).forEach(x => initialState[x] = getInitialModalState())
	return initialState;
}

export default (state = getInitialState(), action) => {
	switch (action.type) {
		case ModalActions.SET_MODAL_FIELD:
			return {
				...state,
				[action.popupName]: {
					...state[action.popupName],
					[action.field]: action.value
				}
			};
		default:
			return state;
	}
};
