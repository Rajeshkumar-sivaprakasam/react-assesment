import { PostInterface } from "../../model/PostModel";

interface PostItemprops {
	post: PostInterface;
}

const PostItem = ({ post }: PostItemprops) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h2>{post.title}</h2>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p> {post.body}</p>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
