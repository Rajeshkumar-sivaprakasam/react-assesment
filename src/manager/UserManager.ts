import { UserService } from "../services/UserService";
import state from "../store";

export class UserManager {
	static getAll = async () => {
		const usersList = await UserService.getAll();
		if (!usersList) return;
		state.userList = usersList;
	};
	
}
