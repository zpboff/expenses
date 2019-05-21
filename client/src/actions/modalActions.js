import { ModalActions } from "../constants/actions";

export const setOpened = (popupName, isOpened) => dispatch => {
    dispatch({
        type: ModalActions.SET_OPENED,
        popupName,
        isOpened
    });
};

export const setLoading = (popupName, isLoading) => dispatch => {
    dispatch({
        type: ModalActions.SET_LOADING,
        popupName,
        isLoading
    });
};

export const setData = (popupName, data) => dispatch => {
    dispatch({
        type: ModalActions.SET_LOADING,
        popupName,
        data
    });
};