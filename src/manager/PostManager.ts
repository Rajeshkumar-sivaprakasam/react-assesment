import { PostService } from "../services/PostService";
import state from "../store";

export class PostManager {
	static getAll = async () => {
		const postList = await PostService.getAll();
		if (!postList) return;
		state.postList = postList;
	};
	static getElementByUserId = async (id:number) =>{
		const postIdList = await PostService.getElementByUserId(id);
		if (!postIdList) return;
		state.postList = postIdList;
	}
}
