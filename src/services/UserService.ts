import { UsersInterface } from "../model/UserModel";
import api from "./ApiService";

//user
export class UserService {
	// getting all user from api
	static getAll = async () => {
		const response = await api.get<UsersInterface[]>("users").catch(() => null);
		if (!response) return;
		return response.data;
	};
}
