import { PostInterface } from "../model/PostModel";
import { UsersInterface } from "../model/UserModel";
import api from "./ApiService";
import { PostService } from "./PostService";

//user
export class UserService {
	// getting all user from api
	static getAll = async () => {
		const response = await api.get<UsersInterface[]>("users").catch(() => null);
		if (!response) return;
		return response.data;
	};
	
	//getting post by specific user ID
	static getElementByUserId = async (id: number) => {
		const response = await api
			.get<PostInterface[]>(`posts?userId=${id}`)
			.catch(() => null);
		if (!response) return;
		return response.data;
	};
}
