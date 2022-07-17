import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { PostManager } from "../../manager/PostManager";
import { PostInterface } from "../../model/PostModel";
import state from "../../store";
import PostItem from "./PostItem";

const PostList = () => {
	const { postList: posts } = useSnapshot(state);
	const fetchPosts = () => {
		PostManager.getAll();
	};

	useEffect(() => {
		fetchPosts();
	}, []);
	return (
		<div>
			{posts.map((post: PostInterface) => (
				<div key={post.id.toString()}>
					<PostItem post={post} />
				</div>
			))}
		</div>
	);
};

export default PostList;
