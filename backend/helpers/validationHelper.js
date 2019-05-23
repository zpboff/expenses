const Validator = require('validator');

const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
}

const validateSignUp = (data) => {
    let errors = {};
    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.passwordConfirm = !isEmpty(data.passwordConfirm) ? data.passwordConfirm : '';

    if(!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
        errors.firstName = 'Имя должно содержать не менее 2 символов';
    }
    
    if(Validator.isEmpty(data.firstName)) {
        errors.firstName = 'Необходимо ввести имя';
    }

    if(!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
        errors.lastName = 'Фамилия должна содержать не менее 2 символов';
    }
    
    if(Validator.isEmpty(data.lastName)) {
        errors.lastName = 'Необходимо ввести фамилию';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Неверный email';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Необходимо ввести email';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Пароль должен содержать не менее 6 символов';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Необходимо ввести пароль';
    }

    if(!Validator.isLength(data.passwordConfirm, {min: 6, max: 30})) {
        errors.passwordConfirm = 'Пароль должен содержать не менее 6 символов';
    }

    if(!Validator.equals(data.password, data.passwordConfirm)) {
        errors.passwordConfirm = 'Пароли должны совпадать';
    }

    if(Validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = 'Необходимо ввести подтвердить пароль';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const validateSignIn = (data) => {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Неверный email';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Необходимо ввести email';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Пароль должен содержать не менее 6 символов';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Необходимо ввести пароль';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}


const validateOperation = (data) => {
    let errors = {};
    data.title = !isEmpty(data.title) ? data.title : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.amount = !isEmpty(data.amount) ? data.amount : '';

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Введите заголовок';
    }

    if(Validator.isEmpty(data.title)) {
        errors.description = 'Введите описание';
    }
    
    if(!Validator.isDecimal(data.amount.toString())) {
        errors.amount = 'Сумма должна быть числом';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const validateGoal = (data) => {
    let errors = {};
    data.target = !isEmpty(data.target) ? data.target : '';
    data.amount = !isEmpty(data.amount) ? data.amount : '';

    if(Validator.isEmpty(data.target)) {
        errors.target = 'Введите цель';
    }

    if(!Validator.isDecimal(data.amount.toString())) {
        errors.amount = 'Сумма должна быть числом';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = {
    validateSignIn,
    validateSignUp,
    validateOperation,
    validateGoal
} 