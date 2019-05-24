import axios from "axios";
import { ErrorActions, ExpenseActions } from "../constants/actions";
import { setOpened } from "./modalActions";
import Modal from "../constants/modals";
import Components from "../constants/components";
import { setComponentLoading } from './interfaceActions'

export const getAllOperations = (startDate, endDate) => dispatch => {
    axios
        .get(`/api/expense/getalloperations/${startDate}/${endDate}`)
        .then(res => {
            const { operations } = res.data;
            dispatch({
                type: ExpenseActions.SET_OPERATIONS,
                operations
            });
            dispatch(setComponentLoading(Components.OperationList, false))
        })
        .catch(err => {
            dispatch({
                type: ErrorActions.GET_ERRORS,
                payload: err.response.data
            });
        });
};

export const getAllGoals = () => dispatch => {
    axios
        .get("/api/expense/getallgoals")
        .then(res => {
            const { goals } = res.data;
            dispatch({
                type: ExpenseActions.SET_GOALS,
                goals
            });
            dispatch(setComponentLoading(Components.GoalList, false))
        })
        .catch(err => {
            dispatch({
                type: ErrorActions.GET_ERRORS,
                payload: err.response.data
            });
        });
};

export const createOperation = operation => dispatch => {
    operation.amount = operation.amount * (operation.isIncome ? 1 : -1);
    axios.post('/api/expense/createoperation', operation).then(res => {
        const { operation } = res.data;
        dispatch({
            type: ExpenseActions.ADD_OPERATION,
            operation
        });
        dispatch(setOpened(Modal.CreateOperation, false));
        dispatch(getBalance());
    }).catch(err => {
        dispatch({
            type: ErrorActions.GET_ERRORS,
            payload: err.response.data
        });
    })
}

export const createGoal = goal => dispatch => {
    axios.post('/api/expense/creategoal', goal).then(res => {
        const { goal } = res.data;
        dispatch({
            type: ExpenseActions.ADD_GOAL,
            goal
        });
        dispatch(setOpened(Modal.CreateGoal, false));
    }).catch(err => {
        dispatch({
            type: ErrorActions.GET_ERRORS,
            payload: err.response.data
        });
    })
}

export const getBalance = () => (dispatch, getState) => {
    var { balance } = getState();
    if (balance) {
        return balance;
    }
    axios.get('/api/expense/getbalance').then(res => {
        const { balance } = res.data;
        dispatch({
            type: ExpenseActions.SET_BALANCE,
            balance
        });
    }).catch(err => {
        dispatch({
            type: ErrorActions.GET_ERRORS,
            payload: err.response.data
        });
    })
}