import React from 'react'
import PostScreen from "./Post/PostScreen";
import { UserScreen } from "./User/UserScreen";

//home screen contains UserScreen page to show all user & Post page also
const HomeScreen = () => {
	return (
		<div style={{ display: "flex", gap: 20 }}>
			<UserScreen />
			<PostScreen />
		</div>
	);
};

export default HomeScreen