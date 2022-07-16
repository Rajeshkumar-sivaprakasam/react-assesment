import { UsersInterface } from '../model/UserModel';
import api from './ApiService'

export class UserService {
	static getAll = async () => {
		const response = await api.get<UsersInterface[]>("users").catch(()=> null);
		if (!response) return;
		return response.data;
	};
	// static getUserElementById = async (id: number) => {
	// 	const response = await api.get<PostInterface[]>(`user/${id}`);
	// 	return response;
	// };
}