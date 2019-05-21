import axios from "axios";
import { ErrorActions, ExpenseActions } from "../constants/actions";

export const getOperation = user => dispatch => {
    axios
        .get("/api/operation/getall")
        .then(res => {
            const { operations } = res.data;
            dispatch({
                type: ExpenseActions.SET_OPERATIONS,
                operations
            });
        })
        .catch(err => {
            dispatch({
                type: ErrorActions.GET_ERRORS,
                payload: err.response.data
            });
        });
};