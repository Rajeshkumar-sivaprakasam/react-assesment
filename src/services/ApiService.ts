import axios from "axios";
import state from "../store";

//base api service for all file
const instance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/",
});

// Add a request interceptor
instance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		state.isLoading = true;
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
instance.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		if (response.status === 200) {
			setInterval(() => {
				state.isLoading = false;
			}, 2000);
		}
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default instance;