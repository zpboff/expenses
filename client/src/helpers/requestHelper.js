import Axios from 'axios';

export default class RequestHelper {
	static Get = (url, callback, errCallback = (error) => {}) => {
		Axios.get(url).then(callback).catch((error) => {
			errCallback(error);
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				return;
			}

			if (error.request) {
				console.log(error.request);
				return;
			}

			console.log('Error', error.message);
			console.log(error.config);
		});
	};

	static Post = (url, body, callback, errCallback = (error) => {}) => {
		Axios.post(url, body).then(callback).catch((error) => {
			errCallback(error);
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				return;
			}

			if (error.request) {
				console.log(error.request);
				return;
			}

			console.log('Error', error.message);
			console.log(error.config);
		});
	};
}
