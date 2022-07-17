import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { PostInterface } from '../../model/PostModel'

interface PostItemprops{
    post:PostInterface
}

const PostItem = ({post}:PostItemprops) => {
  return (
		<div>
				<h2>{post.title}</h2>
                <p> {post.body}</p>
                <p style={{textAlignLast:'center'}}>created by {post.id}</p>
		</div>
	);
}

export default PostItem