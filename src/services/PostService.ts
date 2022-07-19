import { PostInterface } from "../model/PostModel";
import api from "./ApiService";

//post
export class PostService {
	//getting all post from api
	static getAll = async () => {
		const response = await api.get<PostInterface[]>("posts").catch(()=>null);
		if(!response) return
		 return response.data;
	};
}
