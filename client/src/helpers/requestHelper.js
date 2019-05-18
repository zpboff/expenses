import Axios from 'axios';

export default class RequestHelper {
	static Get = (url, callback, errCallback = (error) => {}) => {
		Axios.get(url).then(callback).catch((error) => {
			errCallback(error);
			console.log('Error', error.message);
		});
	};

	static Post = (url, body, callback, errCallback = (error) => {}) => {
		Axios.post(url, body).then(callback).catch((error) => {
			errCallback(error);
			console.log('Error', error.message);
		});
	};
}
