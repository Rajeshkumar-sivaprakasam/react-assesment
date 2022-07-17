import { PostInterface } from "../model/PostModel";
import api from "./ApiService";

export class PostService {
	static getAll = async () => {
		const response = await api.get<PostInterface[]>("posts").catch(()=>null);
		if(!response) return
		 return response.data;
	};
}
