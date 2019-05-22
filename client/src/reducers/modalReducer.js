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
