import { PostInterface } from "../model/PostModel";
import { UsersInterface } from "../model/UserModel";
import api from "./ApiService";
import { PostService } from "./PostService";

export class UserService {
	static getAll = async () => {
		const response = await api.get<UsersInterface[]>("users").catch(() => null);
		if (!response) return;
		return response.data;
	};
	static getElementByUserId = async (id: number) => {
		const response = await api
			.get<PostInterface[]>(`posts?userId=${id}`)
			.catch(() => null);
		if (!response) return;
		return response.data;
	};
}
