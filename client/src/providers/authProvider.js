import RequestHelper from '../helpers/requestHelper';

export default class AuthProvider {
    static SignIn = (user, callback, errCallback) => {
        const requestUrl = '/userapi/signin';

        RequestHelper.Post(requestUrl, user, callback, errCallback);        
    }

    static SignUp = (user, callback, errCallback) => {
        const requestUrl = '/userapi/signup';

        RequestHelper.Post(requestUrl, user, callback, errCallback);        
    }

    static CheckAuth = (callback, errCallback) => {
        const requestUrl = '/userapi/checkToken';

        RequestHelper.Get(requestUrl, callback, errCallback); 
    }
}