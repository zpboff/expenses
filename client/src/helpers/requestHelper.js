import Axios from 'axios'

export default class RequestHelper {
    static Get = (url, callback) => {
        Axios.get(url).then(callback);
    }

    static Post = (url, body, callback) => {
        Axios.post(url, body).then(callback);
    }
}