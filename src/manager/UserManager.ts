import { UserService } from "../services/UserService";
import state from "../store";

export class UserManager {
	// get all user
	static getAll = async () => {
		const usersList = await UserService.getAll();
		if (!usersList) return;
		state.userList = usersList;
	};
}
