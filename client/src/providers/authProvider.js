import RequestHelper from '../helpers/requestHelper';

export default class AuthProvider {
    static SignIn = (user, callback) => {
        const requestUrl = '/userapi/signin';

        RequestHelper.Post(requestUrl, { email, password }, callback)        
    }

    static SignUp = (user, callback) => {
        const requestUrl = '/userapi/signup';

        RequestHelper.Post(requestUrl, user, callback)        
    }
}