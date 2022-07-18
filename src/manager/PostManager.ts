import { UsersInterface } from "../model/UserModel";
import { PostService } from "../services/PostService";
import { UserService } from "../services/UserService";
import state from "../store";

export class PostManager {
	static getAll = async () => {
		const postList = await PostService.getAll();
		if (!postList) return;
		state.postList = postList;
	};

	static getElementByUserId = async (user: UsersInterface) => {
		const postIdList = await UserService.getElementByUserId(user.id);
		if (!postIdList) return;
		state.selectedUser = user;
		state.postList = postIdList;
	};
}
