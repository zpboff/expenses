import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import expenseReducer from './expenseReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    expenses: expenseReducer
});