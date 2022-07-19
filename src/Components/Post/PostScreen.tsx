import { useSnapshot } from "valtio";
import state from "../../store";
import PostList from "./PostList";
import { faker } from "@faker-js/faker";

const PostScreen = () => {
	const { selectedUser } = useSnapshot(state);

	//user details page by default won't show
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
					<h1>{selectedUser && selectedUser.username}</h1>
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

	//contains common  title for page
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

export default PostScreen;
