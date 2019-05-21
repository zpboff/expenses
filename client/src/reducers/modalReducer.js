import { ModalActions } from '../constants/actions';
import Modal from '../constants/modals';

const initialState = {
	[Modal.CreateOperation]: {
		isOpened: false,
		isLoading: false,
		data: {}
	}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ModalActions.SET_OPENED:
			return {
				...state,
				[action.popupName]: {
					...state[action.popupName],
					isOpened: action.isOpened
				}
			};
		case ModalActions.SET_LOADING:
			return {
				...state,
				[action.popupName]: {
					...state[action.popupName],
					isLoading: action.isLoading
				}
			};
		case ModalActions.SET_DATA:
			return {
				...state,
				[action.popupName]: {
					...state[action.popupName],
					data: action.data
				}
			};
		default:
			return state;
	}
};
