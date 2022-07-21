import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { PostManager } from "../../manager/PostManager";
import { PostInterface } from "../../model/PostModel";
import state from "../../store";
import Spinner from "../Spinner/Spinner";
import PostItem from "./PostItem";
// import { useSnapshot } from "valtio";

const PostList = () => {
	const { postList: posts } = useSnapshot(state);
	const { isLoading } = useSnapshot(state);

	const fetchPosts = () => {
		PostManager.getAll();
	};

	useEffect(() => {
		fetchPosts();
	}, []);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div>
					{posts.map((post: PostInterface) => (
						<div key={post.id.toString()}>
							<PostItem post={post} />
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default PostList;
