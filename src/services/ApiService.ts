import axios from "axios";

//base api service for all file
const instance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/",
});

export default instance;