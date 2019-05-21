import { ModalActions } from "../constants/actions";

const setModalField = (popupName, field, value) => {
    return {
        type: ModalActions.SET_MODAL_FIELD,
        popupName,
        field,
        value
    };
};

export const setOpened = (popupName, isOpened) => dispatch => {
    dispatch(setModalField(popupName, 'isOpened', isOpened));
};

export const setLoading = (popupName, isLoading) => dispatch => {
    dispatch(setModalField(popupName, 'isLoading', isLoading));
};

export const setData = (popupName, data) => dispatch => {
    dispatch(setModalField(popupName, 'data', data));
};