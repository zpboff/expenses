import { InterfaceActions } from "../constants/actions";

export const setComponentLoading = (componentName, value) => dispatch => {
    dispatch({
        type: InterfaceActions.SET_COMPONENT_LOADING,
        componentName,
        value
    });
};