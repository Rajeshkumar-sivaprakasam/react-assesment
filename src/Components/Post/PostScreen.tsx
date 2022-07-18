import React from 'react'
import { useSnapshot } from "valtio";
import state from "../../store";
import PostList from "./PostList";
import { faker } from "@faker-js/faker";

const PostScreen = () => {
	const { selectedUser } = useSnapshot(state);

	const UserDetails = () => (
		<div className="container-fluid">
			<div className="row ">
				<div className="col-2">
					<img
						src={faker.image.people(640, 640, true)}
						className="rounded float-start"
						style={{
							width: 200,
							height: 100,
							borderRadius: "50px",
						}}
						alt="..."
					/>
				</div>
				<div className="col-3">
					<h1>User Details</h1>
					<h6>
						<span style={{ marginRight: 20 }}>Email:</span>
						{selectedUser && selectedUser.email}
					</h6>
					<h6>
						<span style={{ marginRight: 20 }}>Phone:</span>
						{selectedUser && selectedUser.phone}
					</h6>
				</div>
				<div className="col-3">
					<h6 style={{ marginTop: 40 }}>
						<span style={{ marginRight: 20 }}>Company:</span>
						{selectedUser && selectedUser.company.name}
					</h6>
					<h6>
						<span style={{ marginRight: 20 }}>website:</span>
						{selectedUser && selectedUser.website}
					</h6>
				</div>
			</div>
		</div>
	);

	const AllPostTitle = () => (
		<div className="jumbotron text-center">
			<h1 className="display-4 font-weight-bold">Blog Post</h1>
			<p className="lead">
				This site contains the Blog post list of several Users.
			</p>
		</div>
	);

	return (
		<div>
			<AllPostTitle />
			{selectedUser?.id ? <UserDetails /> : <></>}
			<hr className="my-4" />
			<PostList />
		</div>
	);
};

const UserDetails = () => {
	const { selectedUser } = useSnapshot(state);
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-2">
					<img
						src={faker.image.people(840, 640, true)}
						className="rounded float-start"
						style={{
							width: 200,
							height: 100,
							borderRadius: "50px",
						}}
						alt="..."
					/>
				</div>
				<div className="col">
					<h2>User Details</h2>
				</div>
			</div>
			<h6>
				<span style={{ marginRight: 20 }}>Email:</span>
				{selectedUser && selectedUser.email}
			</h6>
		</div>
	);
};

export default PostScreen