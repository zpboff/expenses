import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import expenseReducer from './expenseReducer';
import modalReducer from './modalReducer';
import interfaceReducer from './interfaceReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    expenses: expenseReducer,
    modal: modalReducer,
    interface: interfaceReducer
});