import { PostService } from "../services/PostService";
import { UserService } from "../services/UserService";
import state from "../store";

export class PostManager {
	static getAll = async () => {
		const postList = await PostService.getAll();
		if (!postList) return;
		state.postList = postList;
	};

	static getElementByUserId = async (id: number) => {
		const postIdList = await UserService.getElementByUserId(id);
		if (!postIdList) return;
		state.selectedId = id; //selected id not updating here
		state.postList = postIdList;
	};
}
